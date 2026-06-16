// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import DOMPurify from "dompurify";
// import { useTheme } from "../../context/ThemeContext";
// import { Helmet } from "react-helmet-async";

// import { Eye, Heart, MessageCircle, X, Loader2 } from "lucide-react";

// import {
//   fetchCategories,
//   fetchBlogPosts,
//   setActiveCategory,
//   incrementPostView,
//   togglePostLike,
//   sendCommentOtp,
//   verifyCommentOtp,
//   postComment,
// } from "../Redux/Blog/blogSlice.js";

// const POSTS_PER_PAGE = 6;

// const Blog = () => {
//   const dispatch = useDispatch();
//   const { isDark } = useTheme();

//   const {
//     categories,
//     posts: blogPosts,
//     activeCategory,
//     status,
//     error,
//   } = useSelector((state) => state.blog);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [showVerifyModal, setShowVerifyModal] = useState(false);
//   const [showCommentModal, setShowCommentModal] = useState(false);
//   const [pendingPostId, setPendingPostId] = useState(null);
//   const [commentText, setCommentText] = useState("");

//   // Local state for real-time like & comment count update
//   const [updatedPosts, setUpdatedPosts] = useState({});

//   // Track user likes
//   const [userLikes, setUserLikes] = useState(new Set());

//   // User Verification State
//   const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
//   const [step, setStep] = useState("form");
//   const [otp, setOtp] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Loading state for view increment
//   const [viewLoadingIds, setViewLoadingIds] = useState(new Set());

//   // Load saved data from localStorage
//   useEffect(() => {
//     const savedUser = localStorage.getItem("verifiedUser");
//     if (savedUser) {
//       try {
//         const parsedUser = JSON.parse(savedUser);
//         if (parsedUser?.email) {
//           setUserInfo({
//             name: parsedUser.name || "",
//             email: parsedUser.email || "",
//             phone: parsedUser.phone || "",
//           });
//           setIsVerified(true);
//         }
//       } catch (error) {
//         console.error("Failed to parse verifiedUser from localStorage", error);
//       }
//     }

//     const savedLikes = localStorage.getItem("userLikes");
//     if (savedLikes) setUserLikes(new Set(JSON.parse(savedLikes)));
//   }, []);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchCategories());
//       dispatch(fetchBlogPosts());
//     }
//   }, [status, dispatch]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeCategory]);

//   // Merge updated likes & comments
//   const mergedPosts = blogPosts.map((post) => ({
//     ...post,
//     likes: updatedPosts[post._id]?.likes ?? post.likes ?? 0,
//     comments: updatedPosts[post._id]?.comments ?? post.comments ?? [],
//   }));

//   const filteredPosts =
//     activeCategory === "All"
//       ? mergedPosts
//       : mergedPosts.filter((post) => post.category?.name === activeCategory);

//   const totalPosts = filteredPosts.length;
//   const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
//   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//   const currentPosts = filteredPosts.slice(
//     startIndex,
//     startIndex + POSTS_PER_PAGE,
//   );

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const getPageNumbers = () => {
//     const pages = [];
//     const maxPagesToShow = 5;

//     if (totalPages <= maxPagesToShow) {
//       for (let i = 1; i <= totalPages; i++) pages.push(i);
//       return pages;
//     }

//     pages.push(1);
//     let start = Math.max(2, currentPage - 1);
//     let end = Math.min(totalPages - 1, currentPage + 1);

//     if (start > 2) pages.push("...");
//     for (let i = start; i <= end; i++) pages.push(i);
//     if (end < totalPages - 1) pages.push("...");
//     if (totalPages > 1) pages.push(totalPages);

//     return pages;
//   };

//   // ==================== UPDATED handleAction with SLUG ====================
//   const handleAction = (action, post) => {
//     const postSlug = post.slug || post._id;   // ← Slug Fix

//     if (action === "read") {
//       // Increment view count
//       setViewLoadingIds((prev) => new Set(prev).add(post._id));

//       dispatch(incrementPostView(post._id));

//       // Navigate after a small delay so backend gets the request
//       setTimeout(() => {
//         setViewLoadingIds((prev) => {
//           const newSet = new Set(prev);
//           newSet.delete(post._id);
//           return newSet;
//         });
//         window.location.href = `/blog/${postSlug}`;   // ← Changed to slug
//       }, 150);

//       return;
//     }

//     if (!isVerified) {
//       setPendingPostId(post._id);
//       setShowVerifyModal(true);
//       setStep("form");
//       setUserInfo({ name: "", email: "", phone: "" });
//       return;
//     }

//     if (action === "like") {
//       if (userLikes.has(post._id)) return;
//       performLike(post._id);
//     } else if (action === "comment") {
//       setPendingPostId(post._id);
//       setCommentText("");
//       setShowCommentModal(true);
//     }
//   };

//   const performLike = async (postId) => {
//     if (!userInfo.email) {
//       alert("Please verify with your email before liking posts.");
//       return;
//     }

//     const result = await dispatch(
//       togglePostLike({ postId, email: userInfo.email }),
//     );
//     if (!result.error) {
//       setUpdatedPosts((prev) => ({
//         ...prev,
//         [postId]: {
//           ...(prev[postId] || {}),
//           likes: result.payload.likes,
//         },
//       }));

//       const newLikes = new Set(userLikes);
//       newLikes.add(postId);
//       setUserLikes(newLikes);
//       localStorage.setItem("userLikes", JSON.stringify([...newLikes]));
//     }
//   };

//   const submitComment = async () => {
//     if (!commentText.trim()) return alert("Please write a comment");
//     if (!userInfo.email) {
//       alert("Please verify with your email before commenting.");
//       return;
//     }

//     setLoading(true);
//     const result = await dispatch(
//       postComment({
//         postId: pendingPostId,
//         email: userInfo.email,
//         comment: commentText.trim(),
//       }),
//     );

//     if (!result.error) {
//       setUpdatedPosts((prev) => ({
//         ...prev,
//         [pendingPostId]: {
//           ...(prev[pendingPostId] || {}),
//           comments: result.payload.comments || [],
//         },
//       }));
//       setShowCommentModal(false);
//       setCommentText("");
//       alert("✅ Comment posted successfully!");
//     } else {
//       alert(result.payload || "Failed to post comment");
//     }
//     setLoading(false);
//   };

//   const sendOtp = async () => {
//     if (!userInfo.name || !userInfo.email) {
//       alert("Name and Email are required");
//       return;
//     }

//     setLoading(true);
//     await dispatch(
//       sendCommentOtp({
//         postId: pendingPostId,
//         name: userInfo.name,
//         email: userInfo.email,
//         phone: userInfo.phone,
//       }),
//     );
//     setStep("otp");
//     setLoading(false);
//   };

//   const verifyOtp = async () => {
//     if (!otp.trim()) {
//       alert("Please enter the OTP first.");
//       return;
//     }

//     setLoading(true);
//     const result = await dispatch(
//       verifyCommentOtp({
//         postId: pendingPostId,
//         email: userInfo.email,
//         otp: otp.trim(),
//       }),
//     );

//     setLoading(false);

//     if (result.error) {
//       alert(result.payload || "Invalid OTP");
//       return;
//     }

//     setIsVerified(true);
//     localStorage.setItem(
//       "verifiedUser",
//       JSON.stringify({ ...userInfo, verifiedAt: new Date().toISOString() }),
//     );
//     setShowVerifyModal(false);

//     if (pendingPostId) {
//       setTimeout(() => {
//         setShowCommentModal(true);
//       }, 300);
//     }
//   };

//   if (status === "loading") {
//     return (
//       <div
//         className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
//       >
//         <div className="text-2xl animate-pulse">Loading blogs...</div>
//       </div>
//     );
//   }

//   if (status === "failed") {
//     return (
//       <div
//         className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-[#EFE5C8]"}`}
//       >
//         <div className="text-xl">Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//        <>
//               <Helmet>
//                 <title>Digital Marketing Blog | Atla Inteligent</title>
//                 <meta
//                   name="description"
//                   content="Read blogs on SEO, digital marketing, website trends, AI & business growth strategies."
//                 />
//                 <meta
//                   name="keywords"
//                   content="Digital Marketing Blog	SEO Blog, Marketing Tips"
//                 />
//               </Helmet>
//     <div
//       className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-gray-900"} font-sans`}
//     >
//       {/* Header with Category Filters */}
//       <header
//         className={`border-b sticky top-0 z-10 backdrop-blur-md ${isDark ? "border-gray-800 bg-black/90" : "border-gray-200 bg-white/90"}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => dispatch(setActiveCategory(cat))}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
//                   activeCategory === cat
//                     ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
//                     : isDark
//                       ? "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50"
//                       : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-red-600"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {filteredPosts.length === 0 ? (
//           <div
//             className={`text-center py-24 text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}
//           >
//             No posts found in{" "}
//             <span className="text-red-500">"{activeCategory}"</span>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
//               {currentPosts.map((post) => {
//                 const hasLiked = userLikes.has(post._id);
//                 const isViewLoading = viewLoadingIds.has(post._id);

//                 return (
//                   <div
//                     key={post._id}
//                     className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
//                       ${isDark ? "bg-gray-900/70 border-gray-800 hover:border-red-600/60" : "bg-white border-gray-200 hover:border-red-600/60"}`}
//                   >
//                     {/* Image */}
//                     <div className="h-52 relative overflow-hidden">
//                       {post.images?.[0] ? (
//                         <img
//                           src={post.images[0]}
//                           alt={post.name}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div
//                           className={`absolute inset-0 flex items-center justify-center ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
//                         >
//                           <span
//                             className={
//                               isDark ? "text-gray-600" : "text-gray-400"
//                             }
//                           >
//                             No Image
//                           </span>
//                         </div>
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <span
//                         className={`inline-block px-3 py-1 mb-3 text-xs rounded-full w-fit ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}
//                       >
//                         {post.category?.name || "Uncategorized"}
//                       </span>

//                       <h2
//                         className={`text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
//                       >
//                         {post.name || "Untitled"}
//                       </h2>

//                       <p
//                         className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}
//                       >
//                         By{" "}
//                         <span
//                           className={isDark ? "text-gray-200" : "text-gray-800"}
//                         >
//                           {post.author || "Anonymous"}
//                         </span>
//                       </p>

//                       <div
//                         className={`text-sm mb-6 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}
//                         dangerouslySetInnerHTML={{
//                           __html: DOMPurify.sanitize(
//                             post.description || post.excerpt || "",
//                           ),
//                         }}
//                       />

//                       {/* Stats & Read More */}
//                       <div className="mt-auto pt-4 flex justify-between items-center">
//                         <div
//                           className={`flex items-center gap-5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
//                         >
//                           <div className="flex items-center gap-1">
//                             <Eye className="w-5 h-5" /> {post.views || 0}
//                           </div>
//                           <div
//                             className={`flex items-center gap-1 cursor-pointer transition-colors ${hasLiked ? "text-red-500" : "hover:text-red-500"}`}
//                             onClick={() => handleAction("like", post)}
//                           >
//                             <Heart
//                               className={`w-5 h-5 ${hasLiked ? "fill-current" : ""}`}
//                             />{" "}
//                             {post.likes || 0}
//                           </div>
//                           <div
//                             className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors"
//                             onClick={() => handleAction("comment", post)}
//                           >
//                             <MessageCircle className="w-5 h-5" />{" "}
//                             {post.comments?.length || 0}
//                           </div>
//                         </div>

//                         <button
//                           onClick={() => handleAction("read", post)}
//                           disabled={isViewLoading}
//                           className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:translate-x-1
//                             ${
//                               isDark
//                                 ? "bg-red-900/30 border border-red-700/50 text-red-300 hover:bg-red-800/50 hover:border-red-600"
//                                 : "bg-red-100 border border-red-200 text-[#EFE5C8] hover:bg-red-200"
//                             }
//                             ${isViewLoading ? "opacity-70 cursor-wait" : ""}`}
//                         >
//                           {isViewLoading ? "Opening..." : "Read More →"}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex flex-col items-center gap-4 mt-8">
//                 <nav className="flex items-center gap-2">
//                   <button
//                     onClick={() => goToPage(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
//                       currentPage === 1
//                         ? isDark
//                           ? "bg-gray-800 text-gray-500 cursor-not-allowed"
//                           : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                         : isDark
//                           ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
//                           : "bg-gray-100 hover:bg-gray-200 border-gray-300"
//                     }`}
//                   >
//                     ← Previous
//                   </button>

//                   {getPageNumbers().map((page, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => typeof page === "number" && goToPage(page)}
//                       disabled={page === "..."}
//                       className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
//                         page === "..."
//                           ? isDark
//                             ? "text-gray-500"
//                             : "text-gray-400"
//                           : page === currentPage
//                             ? "bg-red-600 text-white shadow-lg"
//                             : isDark
//                               ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
//                               : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => goToPage(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
//                       currentPage === totalPages
//                         ? isDark
//                           ? "bg-gray-800 text-gray-500 cursor-not-allowed"
//                           : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                         : isDark
//                           ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
//                           : "bg-gray-100 hover:bg-gray-200 border-gray-300"
//                     }`}
//                   >
//                     Next →
//                   </button>
//                 </nav>

//                 <div
//                   className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
//                 >
//                   Page {currentPage} of {totalPages} • {totalPosts} posts
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </main>

//       {/* Comment Modal */}
//       {showCommentModal && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div
//             className={`max-w-lg w-full rounded-2xl p-6 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}
//           >
//             <div className="flex justify-between items-center mb-5">
//               <h2 className="text-2xl font-bold">Write a Comment</h2>
//               <button onClick={() => setShowCommentModal(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <textarea
//               value={commentText}
//               onChange={(e) => setCommentText(e.target.value)}
//               placeholder="What are your thoughts?"
//               rows={5}
//               className={`w-full p-4 rounded-xl border resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-red-500 ${
//                 isDark
//                   ? "bg-gray-800 border-gray-700 text-white"
//                   : "bg-gray-50 border-gray-300"
//               }`}
//             />

//             <div className="flex gap-3 mt-5">
//               <button
//                 onClick={() => setShowCommentModal(false)}
//                 className={`flex-1 py-3 rounded-xl font-medium border ${isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"}`}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={submitComment}
//                 disabled={loading || !commentText.trim()}
//                 className={`flex-1 py-3 rounded-xl font-medium text-white flex items-center justify-center ${
//                   commentText.trim()
//                     ? "bg-red-600 hover:bg-red-700"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 {loading ? (
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                 ) : (
//                   "Post Comment"
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Verification Modal */}
//       {showVerifyModal && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div
//             className={`max-w-md w-full rounded-2xl p-8 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}
//           >
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               {step === "form" ? "Verify Yourself" : "Enter OTP"}
//             </h2>

//             {step === "form" ? (
//               <>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   value={userInfo.name}
//                   onChange={(e) =>
//                     setUserInfo({ ...userInfo, name: e.target.value })
//                   }
//                   className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={userInfo.email}
//                   onChange={(e) =>
//                     setUserInfo({ ...userInfo, email: e.target.value })
//                   }
//                   className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number (Optional)"
//                   value={userInfo.phone}
//                   onChange={(e) =>
//                     setUserInfo({ ...userInfo, phone: e.target.value })
//                   }
//                   className={`w-full p-3 rounded-lg mb-6 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
//                 />

//                 <button
//                   onClick={sendOtp}
//                   disabled={loading}
//                   className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-medium disabled:opacity-70"
//                 >
//                   {loading ? "Sending OTP..." : "Send OTP"}
//                 </button>
//               </>
//             ) : (
//               <>
//                 <p className="text-center mb-6 text-sm opacity-75">
//                   OTP sent to <strong>{userInfo.email}</strong>
//                 </p>
//                 <input
//                   type="text"
//                   placeholder="Enter 6-digit OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   maxLength={6}
//                   className={`w-full p-4 text-center text-2xl tracking-widest rounded-lg border mb-6 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
//                 />
//                 <button
//                   onClick={verifyOtp}
//                   className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white font-medium"
//                 >
//                   Verify OTP
//                 </button>
//               </>
//             )}

//             <button
//               onClick={() => setShowVerifyModal(false)}
//               className="mt-6 text-sm text-gray-500 underline block mx-auto"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   </>
//   );
// };

// export default Blog;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";

import { Eye, Heart, MessageCircle, X, Loader2 } from "lucide-react";

import {
  fetchCategories,
  fetchBlogPosts,
  setActiveCategory,
  incrementPostView,
  togglePostLike,
  sendCommentOtp,
  verifyCommentOtp,
  postComment,
} from "../Redux/Blog/blogSlice.js";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  const {
    categories,
    posts: blogPosts,
    activeCategory,
    status,
    error,
  } = useSelector((state) => state.blog);

  const [currentPage, setCurrentPage] = useState(1);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [pendingPostId, setPendingPostId] = useState(null);
  const [commentText, setCommentText] = useState("");

  // Local state for real-time like & comment count update
  const [updatedPosts, setUpdatedPosts] = useState({});

  // Track user likes
  const [userLikes, setUserLikes] = useState(new Set());

  // User Verification State
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [step, setStep] = useState("form");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  // Loading state for view increment
  const [viewLoadingIds, setViewLoadingIds] = useState(new Set());

  // Load saved data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("verifiedUser");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser?.email) {
          setUserInfo({
            name: parsedUser.name || "",
            email: parsedUser.email || "",
            phone: parsedUser.phone || "",
          });
          setIsVerified(true);
        }
      } catch (error) {
        console.error("Failed to parse verifiedUser from localStorage", error);
      }
    }

    const savedLikes = localStorage.getItem("userLikes");
    if (savedLikes) setUserLikes(new Set(JSON.parse(savedLikes)));
  }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
      dispatch(fetchBlogPosts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Merge updated likes & comments
  const mergedPosts = blogPosts.map((post) => ({
    ...post,
    likes: updatedPosts[post._id]?.likes ?? post.likes ?? 0,
    comments: updatedPosts[post._id]?.comments ?? post.comments ?? [],
  }));

  const filteredPosts =
    activeCategory === "All"
      ? mergedPosts
      : mergedPosts.filter((post) => post.category?.name === activeCategory);

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  // ==================== UPDATED handleAction with SLUG ====================
  const handleAction = (action, post) => {
    const postSlug = post.slug || post._id; // ← Slug Fix

    if (action === "read") {
      // Increment view count
      setViewLoadingIds((prev) => new Set(prev).add(post._id));

      dispatch(incrementPostView(post._id));

      // Navigate after a small delay so backend gets the request
      setTimeout(() => {
        setViewLoadingIds((prev) => {
          const newSet = new Set(prev);
          newSet.delete(post._id);
          return newSet;
        });
        window.location.href = `/blog/${postSlug}`; // ← Changed to slug
      }, 150);

      return;
    }

    if (!isVerified) {
      setPendingPostId(post._id);
      setShowVerifyModal(true);
      setStep("form");
      setUserInfo({ name: "", email: "", phone: "" });
      return;
    }

    if (action === "like") {
      if (userLikes.has(post._id)) return;
      performLike(post._id);
    } else if (action === "comment") {
      setPendingPostId(post._id);
      setCommentText("");
      setShowCommentModal(true);
    }
  };

  const performLike = async (postId) => {
    if (!userInfo.email) {
      alert("Please verify with your email before liking posts.");
      return;
    }

    const result = await dispatch(
      togglePostLike({ postId, email: userInfo.email }),
    );
    if (!result.error) {
      setUpdatedPosts((prev) => ({
        ...prev,
        [postId]: {
          ...(prev[postId] || {}),
          likes: result.payload.likes,
        },
      }));

      const newLikes = new Set(userLikes);
      newLikes.add(postId);
      setUserLikes(newLikes);
      localStorage.setItem("userLikes", JSON.stringify([...newLikes]));
    }
  };

  const submitComment = async () => {
    if (!commentText.trim()) return alert("Please write a comment");
    if (!userInfo.email) {
      alert("Please verify with your email before commenting.");
      return;
    }

    setLoading(true);
    const result = await dispatch(
      postComment({
        postId: pendingPostId,
        email: userInfo.email,
        comment: commentText.trim(),
      }),
    );

    if (!result.error) {
      setUpdatedPosts((prev) => ({
        ...prev,
        [pendingPostId]: {
          ...(prev[pendingPostId] || {}),
          comments: result.payload.comments || [],
        },
      }));
      setShowCommentModal(false);
      setCommentText("");
      alert("✅ Comment posted successfully!");
    } else {
      alert(result.payload || "Failed to post comment");
    }
    setLoading(false);
  };

  const sendOtp = async () => {
    if (!userInfo.name || !userInfo.email) {
      alert("Name and Email are required");
      return;
    }

    setLoading(true);
    await dispatch(
      sendCommentOtp({
        postId: pendingPostId,
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
      }),
    );
    setStep("otp");
    setLoading(false);
  };

  const verifyOtp = async () => {
    if (!otp.trim()) {
      alert("Please enter the OTP first.");
      return;
    }

    setLoading(true);
    const result = await dispatch(
      verifyCommentOtp({
        postId: pendingPostId,
        email: userInfo.email,
        otp: otp.trim(),
      }),
    );

    setLoading(false);

    if (result.error) {
      alert(result.payload || "Invalid OTP");
      return;
    }

    setIsVerified(true);
    localStorage.setItem(
      "verifiedUser",
      JSON.stringify({ ...userInfo, verifiedAt: new Date().toISOString() }),
    );
    setShowVerifyModal(false);

    if (pendingPostId) {
      setTimeout(() => {
        setShowCommentModal(true);
      }, 300);
    }
  };

  if (status === "loading") {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        <div className="text-2xl animate-pulse">Loading blogs...</div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-[#EFE5C8]"}`}
      >
        <div className="text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Digital Marketing Blog | Atla Inteligent</title>
        <meta
          name="description"
          content="Read blogs on SEO, digital marketing, website trends, AI & business growth strategies."
        />
        <meta
          name="keywords"
          content="Digital Marketing Blog	SEO Blog, Marketing Tips"
        />
      </Helmet>
      <div
        className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-gray-900"} font-sans`}
      >
        {/* Header with Category Filters */}
        <header
          className={`border-b sticky top-0 z-10 backdrop-blur-md ${isDark ? "border-gray-800 bg-black/90" : "border-gray-200 bg-white/90"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => dispatch(setActiveCategory(cat))}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === cat
                      ? "bg-[#8B6B4A] text-white shadow-lg shadow-red-600/40"
                      : isDark
                        ? "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50"
                        : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-red-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredPosts.length === 0 ? (
            <div
              className={`text-center py-24 text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              No posts found in{" "}
              <span className="text-red-500">"{activeCategory}"</span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
                {currentPosts.map((post) => {
                  const hasLiked = userLikes.has(post._id);
                  const isViewLoading = viewLoadingIds.has(post._id);

                  return (
                    <div
                      key={post._id}
                      className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
                      ${isDark ? "bg-gray-900/70 border-gray-800 hover:border-red-600/60" : "bg-white border-gray-200 hover:border-red-600/60"}`}
                    >
                      {/* Image */}
                      <div className="h-52 relative overflow-hidden">
                        {post.images?.[0] ? (
                          <img
                            src={post.images[0]}
                            alt={post.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div
                            className={`absolute inset-0 flex items-center justify-center ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                          >
                            <span
                              className={
                                isDark ? "text-gray-600" : "text-gray-400"
                              }
                            >
                              No Image
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <span
                          className={`inline-block px-3 py-1 mb-3 text-xs rounded-full w-fit ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}
                        >
                          {post.category?.name || "Uncategorized"}
                        </span>

                        <h2
                          className={`text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          {post.name || "Untitled"}
                        </h2>

                        <p
                          className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          By{" "}
                          <span
                            className={
                              isDark ? "text-gray-200" : "text-gray-800"
                            }
                          >
                            {post.author || "Anonymous"}
                          </span>
                        </p>

                        <div
                          className={`text-sm mb-6 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              post.description || post.excerpt || "",
                            ),
                          }}
                        />

                        {/* Stats & Read More */}
                        <div className="mt-auto pt-4 flex justify-between items-center">
                          <div
                            className={`flex items-center gap-5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                          >
                            <div className="flex items-center gap-1">
                              <Eye className="w-5 h-5" /> {post.views || 0}
                            </div>
                            <div
                              className={`flex items-center gap-1 cursor-pointer transition-colors ${hasLiked ? "text-red-500" : "hover:text-red-500"}`}
                              onClick={() => handleAction("like", post)}
                            >
                              <Heart
                                className={`w-5 h-5 ${hasLiked ? "fill-current" : ""}`}
                              />{" "}
                              {post.likes || 0}
                            </div>
                            <div
                              className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors"
                              onClick={() => handleAction("comment", post)}
                            >
                              <MessageCircle className="w-5 h-5" />{" "}
                              {post.comments?.length || 0}
                            </div>
                          </div>

                          <button
                            onClick={() => handleAction("read", post)}
                            disabled={isViewLoading}
                            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:translate-x-1
                            ${
                              isDark
                                ? "bg-red-900/30 border border-red-700/50 text-red-300 hover:bg-red-800/50 hover:border-red-600"
                                : "bg-red-100 border border-red-200 text-red-700 hover:bg-red-200"
                            }
                            ${isViewLoading ? "opacity-70 cursor-wait" : ""}`}
                          >
                            {isViewLoading ? "Opening..." : "Read More →"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col items-center gap-4 mt-8">
                  <nav className="flex items-center gap-2">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                        currentPage === 1
                          ? isDark
                            ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : isDark
                            ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                            : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                      }`}
                    >
                      ← Previous
                    </button>

                    {getPageNumbers().map((page, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          typeof page === "number" && goToPage(page)
                        }
                        disabled={page === "..."}
                        className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                          page === "..."
                            ? isDark
                              ? "text-gray-500"
                              : "text-gray-400"
                            : page === currentPage
                              ? "bg-red-600 text-white shadow-lg"
                              : isDark
                                ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                                : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                        currentPage === totalPages
                          ? isDark
                            ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : isDark
                            ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                            : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                      }`}
                    >
                      Next →
                    </button>
                  </nav>

                  <div
                    className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
                  >
                    Page {currentPage} of {totalPages} • {totalPosts} posts
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        {/* Comment Modal */}
        {showCommentModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-lg w-full rounded-2xl p-6 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}
            >
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold">Write a Comment</h2>
                <button onClick={() => setShowCommentModal(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="What are your thoughts?"
                rows={5}
                className={`w-full p-4 rounded-xl border resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-gray-50 border-gray-300"
                }`}
              />

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => setShowCommentModal(false)}
                  className={`flex-1 py-3 rounded-xl font-medium border ${isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"}`}
                >
                  Cancel
                </button>
                <button
                  onClick={submitComment}
                  disabled={loading || !commentText.trim()}
                  className={`flex-1 py-3 rounded-xl font-medium text-white flex items-center justify-center ${
                    commentText.trim()
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Post Comment"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Verification Modal */}
        {showVerifyModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-md w-full rounded-2xl p-8 ${isDark ? "bg-gray-900" : "bg-white"} shadow-2xl`}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                {step === "form" ? "Verify Yourself" : "Enter OTP"}
              </h2>

              {step === "form" ? (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    className={`w-full p-3 rounded-lg mb-4 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={userInfo.phone}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, phone: e.target.value })
                    }
                    className={`w-full p-3 rounded-lg mb-6 border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}
                  />

                  <button
                    onClick={sendOtp}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-medium disabled:opacity-70"
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </>
              ) : (
                <>
                  <p className="text-center mb-6 text-sm opacity-75">
                    OTP sent to <strong>{userInfo.email}</strong>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className={`w-full p-4 text-center text-2xl tracking-widest rounded-lg border mb-6 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
                  />
                  <button
                    onClick={verifyOtp}
                    className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white font-medium"
                  >
                    Verify OTP
                  </button>
                </>
              )}

              <button
                onClick={() => setShowVerifyModal(false)}
                className="mt-6 text-sm text-gray-500 underline block mx-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;

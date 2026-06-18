

import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../context/ThemeContext";
import {
  fetchSinglePost,
  incrementPostView,
  togglePostLike,
  sendCommentOtp,
  verifyCommentOtp,
  postComment,
} from "./technologyslice/technologySlice";

const TechnologyDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  const { newsItems, loading, error } = useSelector(
    (state) => state.technology,
  );

  const [post, setPost] = useState(null);
  const hasIncrementedView = useRef(false);

  // Comment Form States
  const [commentText, setCommentText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset view increment when slug changes
  useEffect(() => {
    hasIncrementedView.current = false;
  }, [slug]);

  // Fetch post
  useEffect(() => {
    if (!slug) return;
    dispatch(fetchSinglePost(slug));
  }, [slug, dispatch]);

  // Increment view count once
  useEffect(() => {
    if (slug && post && !hasIncrementedView.current) {
      dispatch(incrementPostView(slug));
      hasIncrementedView.current = true;
    }
  }, [slug, post, dispatch]);

  // Sync post from Redux
  useEffect(() => {
    if (!slug) return;
    const foundPost = newsItems.find((item) => item.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [newsItems, slug]);

  if (loading && !post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading post...
      </div>
    );
  }

  if (error || !post) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-white" : "bg-gray-50"}`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link
            to="/technology"
            className="text-blue-600 hover:underline text-lg"
          >
            ← Back to Technology
          </Link>
        </div>
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(post.description || "");

  const handleLike = () => {
    if (!email) {
      alert("Please enter your email in the comment section first");
      return;
    }
    dispatch(togglePostLike({ slug, email }));
  };

  const handleSendOtp = async () => {
    if (!name || !email || !phone) {
      alert("Name, Email and Phone are required");
      return;
    }
    setIsSubmitting(true);
    const result = await dispatch(sendCommentOtp({ slug, name, email, phone }));
    setIsSubmitting(false);

    if (!result.error) {
      setShowOtpInput(true);
    } else {
      alert(result.payload?.message || "Failed to send OTP");
    }
  };

  const handlePostComment = async () => {
    if (!otp.trim() || !commentText.trim()) {
      alert("OTP and comment are required");
      return;
    }

    setIsSubmitting(true);
    const verifyResult = await dispatch(
      verifyCommentOtp({ slug, email, otp: otp.trim() }),
    );

    if (verifyResult.error) {
      setIsSubmitting(false);
      alert(verifyResult.payload || "OTP expired or invalid");
      return;
    }

    const postResult = await dispatch(
      postComment({ slug, email, comment: commentText.trim() }),
    );
    setIsSubmitting(false);

    if (!postResult.error) {
      setCommentText("");
      setOtp("");
      setShowOtpInput(false);
      alert("✅ Comment posted successfully!");
    } else {
      alert(postResult.payload?.message || "Failed to post comment");
    }
  };

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Hero Section */}
      <div className="relative h-auto mr-20 ml-20 overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover brightness-75"
          />
        ) : (
          <div
            className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"}`}
          />
        )}

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
       
          <span
            className={`inline-block px-4 py-1.5 mb-4 text-sm rounded-full border ${
              isDark
                ? "bg-red-900/70 border-red-700 text-red-200"
                : "bg-red-100 border-red-200 text-red-700"
            }`}
          >
            {post.category || "Technology"}
          </span>

          <div
            className={`flex flex-wrap items-center gap-4 text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}
          >
            <div>{post.date || "Recently"}</div>
            <div className="flex items-center gap-2">
              <span>•</span>
              <span>{post.author ? `By ${post.author}` : "Anonymous"}</span>
            </div>



          <h1
            className={`text-4xl md:text-6xl pt-12  font-bold leading-tight tracking-tight${isDark ? "text-gray-400" : "text-gray-800"} mb-6`}
          >
            {post.title}
          </h1>
        </div>
        <article className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          {sanitizedContent ? (
            <div
              className={`text-[1.1rem] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          ) : (
            <p className="text-center py-20 italic text-gray-500">
              Content not available
            </p>
          )}

          {/* Additional Images */}
          {post.images?.length > 1 && (
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Additional image ${idx + 2}`}
                  className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 object-cover"
                />
              ))}
            </div>
          )}
        </article>

        {/* Like Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-[#EFE5C8] hover:text-red-700 text-2xl font-medium transition-colors"
          >
            ❤️ <span>{post.likes || 0}</span>
          </button>
        </div>

        {/* Comments Section */}
        <section className="mt-20 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-2">Comments</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {post.comments?.length || 0} comment
            {post.comments?.length !== 1 ? "s" : ""}
          </p>

          {post.comments?.length > 0 ? (
            <div className="space-y-6">
              {post.comments.map((comment, index) => (
                <div
                  key={comment._id || index}
                  className={`p-6 rounded-2xl border ${isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-gray-50"}`}
                >
                  <div className="flex justify-between mb-3">
                    <div>
                      <p className="font-semibold">
                        {comment.user?.username ||
                          comment.user?.email?.split("@")[0] ||
                          "Anonymous"}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {comment.createdAt
                          ? new Date(comment.createdAt).toLocaleString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )
                          : "Just now"}
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {comment.comment}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              No comments yet. Be the first to comment!
            </div>
          )}
        </section>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            to="/technology"
            className={`inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg transition-all ${
              isDark
                ? "bg-red-900/60 hover:bg-red-800 border border-red-700 text-red-200"
                : "bg-red-100 hover:bg-red-200 border border-red-600 text-red-700"
            }`}
          >
            ← Back to Technology
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TechnologyDetail;



import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../../context/ThemeContext";

import {
  fetchBlogPostById,
  clearCurrentPost,
} from "../Redux/Blog/blogSlice.js";

const BlogDetail = () => {
  const { slug } = useParams();           // ← Changed to slug
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const { currentPost, detailStatus, detailError } = useSelector(
    (state) => state.blog
  );

  // Fetch post when slug changes
  useEffect(() => {
    if (!slug) {
      navigate("/blog", { replace: true });
      return;
    }

    dispatch(fetchBlogPostById(slug));     // ← Now passing slug

    // Cleanup on unmount or slug change
    return () => {
      dispatch(clearCurrentPost());
    };
  }, [slug, dispatch, navigate]);

  // Loading State
  if (detailStatus === "loading") {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="text-2xl animate-pulse">Loading article...</div>
      </div>
    );
  }

  // Error / Not Found State
  if (detailStatus === "failed" || !currentPost) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-6 ${
          isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-xl mb-8 text-center max-w-md">
          {detailError || "Post not found"}
        </p>
        <Link
          to="/blog"
          className={`px-8 py-3 rounded-xl font-medium transition-all ${
            isDark
              ? "bg-red-900/60 hover:bg-red-800 border border-red-700 text-red-200"
              : "bg-red-100 hover:bg-red-200 border border-red-600 text-red-700"
          }`}
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const post = currentPost;

  const sanitizedContent = DOMPurify.sanitize(
    post.content || post.fullDescription || post.description || ""
  );

  const sanitizedDescription = DOMPurify.sanitize(post.description || "", {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  })
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div
      className={`min-h-screen mt-10 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        {post.images?.[0] ? (
          <img
            src={post.images[0]}
            alt={post.name}
            className="w-full h-full object-cover brightness-75"
          />
        ) : (
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"}`} />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

        {/* Title & Meta - Moved inside hero for better design */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto">
         

         
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">


      <span
  className={`inline-block px-4 py-1.5 mb-4 text-sm rounded-full border 
    ${isDark 
      ? "bg-red-900/70 border-red-700 text-red-200" 
      : "bg-red-100 border-red-200 text-red-700"
    }`}
>
  {post.category?.name || "Uncategorized"}
</span>

<div className={`flex flex-wrap items-center gap-4 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
  <div>
    {post.createdAt
      ? new Date(post.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "Recently"}
  </div>
  <div className="flex items-center gap-2">
    <span>•</span>
    <span>{post.author ? `By ${post.author}` : "Anonymous"}</span>
  </div>
</div>

<h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 
               text-zinc-900 dark:text-white 
               tracking-tight  ${isDark ? "text-gray-300" : "text-gray-700"}`}>
  {post.name || "Untitled"}
</h1>
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
                  alt={`Blog image ${idx + 2}`}
                  className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 object-cover"
                />
              ))}
            </div>
          )}
        </article>

        {/* Comments Section */}
        <section className="mt-20 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-2">Comments</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {post.comments?.length || 0} comment{post.comments?.length !== 1 ? "s" : ""}
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
                        {comment.user?.name || comment.user?.user || comment.user?.email || "Anonymous"}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {comment.createdAt
                          ? new Date(comment.createdAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
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
              No comments yet. Be the first!
            </div>
          )}
        </section>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className={`inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg transition-all ${
              isDark
                ? "bg-red-900/60 hover:bg-red-800 border border-red-700 text-red-200"
                : "bg-red-100 hover:bg-red-200 border border-red-600 text-red-700"
            }`}
          >
            ← Back to all articles
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
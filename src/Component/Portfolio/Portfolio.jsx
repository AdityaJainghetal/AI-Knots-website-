// // import React, { useEffect, useMemo, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import DataTable from "react-data-table-component";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // import {
// //   fetchTech,
// //   fetchCategories,
// //   createTech,
// //   updateTech,
// //   deleteTech,
// //   setFormValue,
// //   setFormImages,
// //   beginEdit,
// //   resetForm,
// //   clearError,
// // } from "./portfolioslice.js";

// // const Portfolio = () => {
// //   const dispatch = useDispatch();

// //   const {
// //     items: techs,
// //     categories,
// //     form,
// //     editId,
// //     loading,
// //     tableLoading,
// //     deleteLoading,
// //     error,
// //   } = useSelector((state) => state.portfolio);

// //   // Local state for image previews
// //   const [imagePreviews, setImagePreviews] = useState([]);

// //   // Fetch data on mount
// //   useEffect(() => {
// //     dispatch(fetchTech());
// //     dispatch(fetchCategories());
// //   }, [dispatch]);

// //   // Error Toast
// //   useEffect(() => {
// //     if (error) {
// //       toast.error(error);
// //       dispatch(clearError());
// //     }
// //   }, [error, dispatch]);

// //   // Handle Image Selection + Previews
// //   const handleImageChange = (e) => {
// //     const files = Array.from(e.target.files);
// //     dispatch(setFormImages(files));

// //     // Create object URLs for preview
// //     const previews = files.map((file) => URL.createObjectURL(file));
// //     setImagePreviews(previews);
// //   };

// //   // Cleanup previews on unmount
// //   useEffect(() => {
// //     return () => {
// //       imagePreviews.forEach((url) => URL.revokeObjectURL(url));
// //     };
// //   }, [imagePreviews]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (loading) return;

// //     const formData = new FormData();
// //     formData.append("title", form.title);
// //     formData.append("description", form.description);
// //     formData.append("category", form.category);
// //     formData.append("link", form.link);

// //     form.images.forEach((image) => {
// //       formData.append("images", image);
// //     });

// //     const action = editId
// //       ? updateTech({ id: editId, formData })
// //       : createTech(formData);

// //     dispatch(action).then((result) => {
// //       if (!result.error) {
// //         toast.success(
// //           editId ? "Portfolio Updated Successfully!" : "Portfolio Created Successfully!"
// //         );
// //         dispatch(resetForm());
// //         setImagePreviews([]);
// //         dispatch(fetchTech());
// //       }
// //     });
// //   };

// //   const handleEdit = (row) => {
// //     dispatch(beginEdit(row));
// //     setImagePreviews([]); // Clear previews when editing
// //     toast.info(`Editing: ${row.title}`);
// //   };

// //   const handleDelete = (id) => {
// //     if (!window.confirm("Are you sure you want to delete this portfolio item?")) return;

// //     dispatch(deleteTech(id)).then((result) => {
// //       if (!result.error) {
// //         toast.success("Portfolio Deleted Successfully");
// //       }
// //     });
// //   };

// //   // Table Columns
// //   const columns = useMemo(
// //     () => [
// //       {
// //         name: "Title",
// //         selector: (row) => row.title,
// //         sortable: true,
// //         grow: 2,
// //       },
// //       {
// //         name: "Category",
// //         selector: (row) => row.category?.name || "—",
// //         sortable: true,
// //       },
// //       {
// //         name: "Link",
// //         cell: (row) =>
// //           row.link ? (
// //             <a
// //               href={row.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-[#EFE5C8] hover:underline truncate max-w-[220px] block"
// //             >
// //               {row.link}
// //             </a>
// //           ) : (
// //             "—"
// //           ),
// //         grow: 1,
// //       },
// //       {
// //         name: "Images",
// //         cell: (row) => (
// //           <div className="flex gap-2 flex-wrap">
// //             {row.images?.length > 0 ? (
// //               row.images.map((src, i) => (
// //                 <img
// //                   key={i}
// //                   src={src}
// //                   alt={`Thumbnail ${i + 1}`}
// //                   className="w-12 h-12 object-cover rounded border border-gray-300"
// //                 />
// //               ))
// //             ) : (
// //               "—"
// //             )}
// //           </div>
// //         ),
// //         ignoreRowClick: true,
// //       },
// //       {
// //         name: "Actions",
// //         cell: (row) => (
// //           <div className="flex gap-2">
// //             <button
// //               onClick={() => handleEdit(row)}
// //               disabled={loading || deleteLoading[row._id]}
// //               className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white px-4 py-1.5 rounded text-sm font-medium transition"
// //             >
// //               Edit
// //             </button>

// //             <button
// //               onClick={() => handleDelete(row._id)}
// //               disabled={loading || deleteLoading[row._id]}
// //               className={`px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 transition ${
// //                 deleteLoading[row._id]
// //                   ? "bg-red-400 cursor-not-allowed"
// //                   : "bg-red-600 hover:bg-red-700"
// //               }`}
// //             >
// //               {deleteLoading[row._id] ? (
// //                 <>
// //                   <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
// //                   Deleting...
// //                 </>
// //               ) : (
// //                 "Delete"
// //               )}
// //             </button>
// //           </div>
// //         ),
// //         ignoreRowClick: true,
// //         button: true,
// //       },
// //     ],
// //     [loading, deleteLoading]
// //   );

// //   return (
// //     <div className="min-h-screen bg-gray-50 dark:bg-black py-10 px-6">
// //       <div className="max-w-7xl mx-auto">
// //         <ToastContainer position="top-right" autoClose={4000} theme="colored" />

// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">
// //             Our <span className="text-[#EFE5C8]">Portfolio</span>
// //           </h1>
// //           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// //             Showcase of our latest web development, digital marketing, and IT projects
// //           </p>
// //         </div>

// //         {/* Add / Edit Form */}
// //         <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-10 mb-16">
// //           <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
// //             {editId ? "Update Portfolio Item" : "Add New Portfolio Item"}
// //           </h2>

// //           <form onSubmit={handleSubmit} className="space-y-8">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <input
// //                 type="text"
// //                 placeholder="Project Title"
// //                 value={form.title}
// //                 onChange={(e) =>
// //                   dispatch(setFormValue({ field: "title", value: e.target.value }))
// //                 }
// //                 className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 bg-gray-50 dark:bg-gray-800"
// //                 required
// //                 disabled={loading}
// //               />

// //               <select
// //                 value={form.category}
// //                 onChange={(e) =>
// //                   dispatch(setFormValue({ field: "category", value: e.target.value }))
// //                 }
// //                 className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 bg-gray-50 dark:bg-gray-800"
// //                 required
// //                 disabled={loading}
// //               >
// //                 <option value="">Select Category</option>
// //                 {categories.map((cat) => (
// //                   <option key={cat._id} value={cat._id}>
// //                     {cat.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             <input
// //               type="url"
// //               placeholder="Project Link[](https://...)"
// //               value={form.link}
// //               onChange={(e) =>
// //                 dispatch(setFormValue({ field: "link", value: e.target.value }))
// //               }
// //               className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-red-500 bg-gray-50 dark:bg-gray-800"
// //               required
// //               disabled={loading}
// //             />

// //             <textarea
// //               placeholder="Project Description"
// //               value={form.description}
// //               onChange={(e) =>
// //                 dispatch(setFormValue({ field: "description", value: e.target.value }))
// //               }
// //               rows={5}
// //               className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-3xl focus:outline-none focus:border-red-500 bg-gray-50 dark:bg-gray-800 resize-y"
// //               required
// //               disabled={loading}
// //             />

// //             <div>
// //               <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
// //                 Upload Images (Multiple allowed)
// //               </label>
// //               <input
// //                 type="file"
// //                 multiple
// //                 accept="image/*"
// //                 onChange={handleImageChange}
// //                 className="w-full text-sm file:mr-4 file:py-3 file:px-6 file:rounded-2xl file:border-0 file:bg-red-50 file:text-red-700 hover:file:bg-red-100 dark:file:bg-gray-800"
// //                 disabled={loading}
// //               />

// //               {/* Image Previews */}
// //               {imagePreviews.length > 0 && (
// //                 <div className="mt-6 flex gap-4 flex-wrap">
// //                   {imagePreviews.map((preview, i) => (
// //                     <img
// //                       key={i}
// //                       src={preview}
// //                       alt={`Preview ${i + 1}`}
// //                       className="w-28 h-28 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
// //                     />
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             <div className="flex gap-4 pt-6">
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className={`flex-1 py-4 rounded-2xl text-white font-semibold text-lg transition-all ${
// //                   loading
// //                     ? "bg-red-400 cursor-not-allowed"
// //                     : "bg-red-600 hover:bg-red-700"
// //                 }`}
// //               >
// //                 {loading ? (
// //                   <span className="flex items-center justify-center gap-2">
// //                     <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
// //                     {editId ? "Updating..." : "Creating..."}
// //                   </span>
// //                 ) : editId ? (
// //                   "Update Portfolio"
// //                 ) : (
// //                   "Create Portfolio"
// //                 )}
// //               </button>

// //               {editId && (
// //                 <button
// //                   type="button"
// //                   onClick={() => {
// //                     dispatch(resetForm());
// //                     setImagePreviews([]);
// //                   }}
// //                   className="flex-1 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-2xl text-lg transition"
// //                 >
// //                   Cancel
// //                 </button>
// //               )}
// //             </div>
// //           </form>
// //         </div>

// //         {/* Data Table */}
// //         <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
// //           {tableLoading ? (
// //             <div className="py-20 flex flex-col items-center justify-center">
// //               <div className="animate-spin h-16 w-16 border-4 border-red-500 border-t-transparent rounded-full mb-4" />
// //               <p className="text-gray-600 dark:text-gray-400">Loading Portfolio...</p>
// //             </div>
// //           ) : (
// //             <DataTable
// //               columns={columns}
// //               data={techs}
// //               pagination
// //               highlightOnHover
// //               pointerOnHover
// //               responsive
// //               noDataComponent={
// //                 <div className="py-20 text-center text-gray-500 dark:text-gray-400">
// //                   No portfolio items found
// //                 </div>
// //               }
// //               customStyles={{
// //                 headCells: {
// //                   style: {
// //                     backgroundColor: "#f8fafc",
// //                     color: "#374151",
// //                     fontWeight: "600",
// //                     paddingLeft: "16px",
// //                   },
// //                 },
// //                 cells: {
// //                   style: {
// //                     paddingLeft: "16px",
// //                   },
// //                 },
// //               }}
// //             />
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Portfolio;

// import React, { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import DataTable from "react-data-table-component";
// import { fetchTech, fetchCategories, clearError } from "./portfolioslice.js";

// const Portfolio = () => {
//   const dispatch = useDispatch();

//   const {
//     items: techs,
//     categories,
//     tableLoading,
//     error,
//   } = useSelector((state) => state.portfolio);

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     dispatch(fetchTech());
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error) {
//       dispatch(clearError());
//     }
//   }, [error, dispatch]);

//   // Filtered data
//   const filteredData = useMemo(() => {
//     return techs.filter((item) => {
//       const matchSearch =
//         !search ||
//         item.title?.toLowerCase().includes(search.toLowerCase()) ||
//         item.description?.toLowerCase().includes(search.toLowerCase());

//       const matchCategory =
//         !selectedCategory || item.category?._id === selectedCategory;

//       return matchSearch && matchCategory;
//     });
//   }, [techs, search, selectedCategory]);

//   // Stats
//   const stats = useMemo(() => {
//     const total = techs.length;
//     const catCount = {};
//     techs.forEach((t) => {
//       const name = t.category?.name || "Other";
//       catCount[name] = (catCount[name] || 0) + 1;
//     });
//     return { total, catCount };
//   }, [techs]);

//   // Table Columns — READ ONLY (no edit/delete)
//   const columns = useMemo(
//     () => [
//       {
//         name: "#",
//         selector: (_, i) => i + 1,
//         width: "60px",
//         cell: (_, i) => (
//           <span className="text-gray-400 text-sm font-mono">{i + 1}</span>
//         ),
//       },
//       {
//         name: "Title",
//         selector: (row) => row.title,
//         sortable: true,
//         grow: 2,
//         cell: (row) => (
//           <span className="font-semibold text-gray-900 dark:text-white text-sm">
//             {row.title}
//           </span>
//         ),
//       },
//       {
//         name: "Category",
//         selector: (row) => row.category?.name || "—",
//         sortable: true,
//         cell: (row) => {
//           const name = row.category?.name || "";
//           const colorMap = {
//             "Web Development": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
//             "Digital Marketing": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
//             "IT Projects": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
//           };
//           const cls =
//             colorMap[name] ||
//             "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
//           return name ? (
//             <span
//               className={`px-2.5 py-1 rounded-full text-xs font-medium ${cls}`}
//             >
//               {name}
//             </span>
//           ) : (
//             <span className="text-gray-400 text-sm">—</span>
//           );
//         },
//       },
//       {
//         name: "Description",
//         selector: (row) => row.description,
//         grow: 3,
//         cell: (row) => (
//           <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 py-1">
//             {row.description || "—"}
//           </p>
//         ),
//       },
//       {
//         name: "Link",
//         cell: (row) =>
//           row.link ? (
//             <a
//               href={row.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#EFE5C8] hover:text-red-700 hover:underline truncate max-w-[180px] block text-xs"
//             >
//               {row.link.replace(/^https?:\/\//, "")}
//             </a>
//           ) : (
//             <span className="text-gray-400 text-sm">—</span>
//           ),
//         grow: 1,
//       },
//       {
//         name: "Images",
//         cell: (row) => (
//           <div className="flex gap-1.5 flex-wrap py-1">
//             {row.images?.length > 0 ? (
//               row.images.slice(0, 3).map((src, i) => (
//                 <img
//                   key={i}
//                   src={src}
//                   alt={`Thumbnail ${i + 1}`}
//                   className="w-10 h-10 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
//                 />
//               ))
//             ) : (
//               <div className="w-10 h-10 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
//                 <span className="text-gray-300 dark:text-gray-600 text-xs">—</span>
//               </div>
//             )}
//           </div>
//         ),
//         ignoreRowClick: true,
//       },
//     ],
//     []
//   );

//   const customStyles = {
//     headRow: {
//       style: {
//         backgroundColor: "transparent",
//         borderBottomWidth: "1px",
//         borderBottomColor: "rgba(0,0,0,0.08)",
//         minHeight: "44px",
//       },
//     },
//     headCells: {
//       style: {
//         color: "#6b7280",
//         fontWeight: "600",
//         fontSize: "11px",
//         textTransform: "uppercase",
//         letterSpacing: "0.05em",
//         paddingLeft: "16px",
//         paddingRight: "8px",
//         backgroundColor: "#f9fafb",
//       },
//     },
//     rows: {
//       style: {
//         fontSize: "13px",
//         minHeight: "60px",
//         backgroundColor: "transparent",
//         "&:hover": {
//           backgroundColor: "#fef2f2",
//           cursor: "default",
//         },
//       },
//     },
//     cells: {
//       style: {
//         paddingLeft: "16px",
//         paddingRight: "8px",
//       },
//     },
//     pagination: {
//       style: {
//         borderTopWidth: "1px",
//         borderTopColor: "rgba(0,0,0,0.06)",
//         backgroundColor: "#f9fafb",
//         color: "#6b7280",
//         fontSize: "12px",
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-black py-10 px-4 md:px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
//             Our <span className="text-[#EFE5C8]">Portfolio</span>
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400 text-base">
//             Showcase of our latest web development, digital marketing, and IT projects
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
//             <p className="text-xs text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide font-medium">
//               Total projects
//             </p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white">
//               {stats.total}
//             </p>
//           </div>
//           {Object.entries(stats.catCount).map(([name, count]) => {
//             const iconMap = {
//               "Web Development": "🌐",
//               "Digital Marketing": "📣",
//               "IT Projects": "🖥",
//             };
//             return (
//               <div
//                 key={name}
//                 className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5"
//               >
//                 <p className="text-xs text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide font-medium truncate">
//                   {name}
//                 </p>
//                 <p className="text-3xl font-bold text-gray-900 dark:text-white">
//                   {count}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Table Card */}
//         <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">

//           {/* Toolbar */}
//           <div className="flex flex-col sm:flex-row gap-3 p-5 border-b border-gray-100 dark:border-gray-800">
//             <div className="relative flex-1">
//               <svg
//                 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
//                 />
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Search by title or description..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-red-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
//               />
//             </div>
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-red-400 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//             >
//               <option value="">All categories</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//             <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap px-1">
//               {filteredData.length} result{filteredData.length !== 1 ? "s" : ""}
//             </div>
//           </div>

//           {/* Data Table */}
//           {tableLoading ? (
//             <div className="py-24 flex flex-col items-center justify-center gap-4">
//               <div className="animate-spin h-12 w-12 border-4 border-red-500 border-t-transparent rounded-full" />
//               <p className="text-gray-400 dark:text-gray-500 text-sm">
//                 Loading portfolio...
//               </p>
//             </div>
//           ) : (
//             <DataTable
//               columns={columns}
//               data={filteredData}
//               pagination
//               paginationPerPage={10}
//               paginationRowsPerPageOptions={[5, 10, 20, 50]}
//               highlightOnHover
//               responsive
//               customStyles={customStyles}
//               noDataComponent={
//                 <div className="py-24 text-center">
//                   <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
//                     <svg
//                       className="w-8 h-8 text-gray-300 dark:text-gray-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={1.5}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M20 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7m16 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5m16 0H4"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-gray-500 dark:text-gray-400 font-medium">
//                     No portfolio items found
//                   </p>
//                   {search && (
//                     <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
//                       Try a different search term
//                     </p>
//                   )}
//                 </div>
//               }
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTech, fetchCategories, clearError } from "./portfolioslice.js";

/* ─── Thumbnail mock-browser per card ─── */
const MockBrowser = ({ color = "#0cbfa8", dark = false }) => (
  <div
    className="w-full h-40 flex items-center justify-center relative overflow-hidden"
    style={{ background: color }}
  >
    <div
      className="w-11/12 h-5/6 rounded-lg overflow-hidden flex flex-col"
      style={{ background: dark ? "#0f0f23" : "#ffffff" }}
    >
      {/* browser bar */}
      <div
        className="flex items-center gap-1 px-2 shrink-0"
        style={{
          height: 18,
          background: dark ? "#1a1a2e" : "#e5e7eb",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      {/* page skeleton */}
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        <div
          className="h-1.5 rounded w-3/5"
          style={{ background: dark ? "#2d2d4e" : "#d1d5db" }}
        />
        <div
          className="flex-1 rounded"
          style={{ background: dark ? "#1e2540" : "#e5f4f2" }}
        />
        <div
          className="h-1.5 rounded w-4/5"
          style={{ background: dark ? "#2d2d4e" : "#d1d5db" }}
        />
        <div
          className="h-1.5 rounded w-2/3"
          style={{ background: dark ? "#2d2d4e" : "#d1d5db" }}
        />
      </div>
    </div>
    {/* decorative figure bottom-right */}
    <div
      className="absolute bottom-0 right-3 w-10 h-14 rounded-t-lg opacity-60"
      style={{ background: dark ? "#2d3a6e" : "#a7ddd6" }}
    />
  </div>
);

/* ─── Thumbnail using real image ─── */
const ImageThumb = ({ src, title }) => (
  <div className="w-full h-40 overflow-hidden bg-gray-100 dark:bg-gray-800">
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  </div>
);

/* ─── Badge ─── */
const Badge = ({ name }) => {
  const styles = {
    SEO: "bg-teal-500 text-teal-900",
    WordPress: "bg-red-600 text-white",
    "Digital Marketing": "bg-blue-500 text-blue-900",
    "IT Projects": "bg-purple-100 text-purple-800",
    "Web Development": "bg-cyan-100 text-cyan-800",
  };
  const cls = styles[name] || "bg-gray-200 text-gray-700";
  return (
    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${cls}`}>
      {name}
    </span>
  );
};

/* ─── Single Card ─── */
const PortfolioCard = ({ item, index }) => {
  const hasImage = item.images?.length > 0;
  const catName = item.category?.name || "";

  const thumbColors = [
    { bg: "#0cbfa8", dark: false },
    { bg: "#1a3a5c", dark: true },
    { bg: "#c0392b", dark: false },
    { bg: "#0cbfa8", dark: false },
    { bg: "#2c3e50", dark: true },
    { bg: "#16a085", dark: false },
  ];
  const { bg, dark } = thumbColors[index % thumbColors.length];

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-red-300 dark:hover:border-red-800 transition-all duration-200 hover:-translate-y-0.5">
      {/* thumbnail */}
      {hasImage ? (
        <ImageThumb src={item.images[0]} title={item.title} />
      ) : (
        <MockBrowser color={bg} dark={dark} />
      )}

      {/* body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <Badge name={catName} />

        <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
          {item.title}
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3">
          {item.description || "No description available."}
        </p>

        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-[#EFE5C8] border border-red-500 rounded-full px-3 py-1.5 w-fit hover:bg-red-600 hover:text-white transition-colors duration-150"
          >
            Explore More
            <span className="w-4 h-4 border border-current rounded-full flex items-center justify-center text-[10px] leading-none">
              ›
            </span>
          </a>
        ) : (
          <span className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-gray-400 border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1.5 w-fit cursor-default">
            No link
          </span>
        )}
      </div>
    </div>
  );
};

/* ─── Section ─── */
const PortfolioSection = ({ title, items }) => {
  if (!items.length) return null;
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
        <span className="text-sm text-gray-400 dark:text-gray-500">
          {items.length} project{items.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <PortfolioCard key={item._id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
};

/* ─── Skeleton loader ─── */
const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden animate-pulse">
    <div className="w-full h-40 bg-gray-100 dark:bg-gray-800" />
    <div className="p-4 flex flex-col gap-3">
      <div className="h-4 w-16 rounded-full bg-gray-100 dark:bg-gray-800" />
      <div className="h-4 w-3/4 rounded bg-gray-100 dark:bg-gray-800" />
      <div className="h-3 w-full rounded bg-gray-100 dark:bg-gray-800" />
      <div className="h-3 w-5/6 rounded bg-gray-100 dark:bg-gray-800" />
      <div className="h-7 w-28 rounded-full bg-gray-100 dark:bg-gray-800 mt-1" />
    </div>
  </div>
);

/* ─── Main component ─── */
const Portfolio = () => {
  const dispatch = useDispatch();
  const {
    items: techs,
    categories,
    tableLoading,
    error,
  } = useSelector((state) => state.portfolio);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    dispatch(fetchTech());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error) dispatch(clearError());
  }, [error, dispatch]);

  /* filtered + grouped by category */
  const grouped = useMemo(() => {
    const filtered = techs.filter((item) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        item.title?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q);
      const matchCat =
        activeCategory === "all" || item.category?._id === activeCategory;
      return matchSearch && matchCat;
    });

    /* group by category name */
    const map = {};
    filtered.forEach((item) => {
      const name = item.category?.name || "Other";
      if (!map[name]) map[name] = [];
      map[name].push(item);
    });
    return map;
  }, [techs, search, activeCategory]);

  const totalVisible = Object.values(grouped).reduce(
    (acc, arr) => acc + arr.length,
    0,
  );

  /* Section title mapping */
  const sectionTitle = (catName) => {
    const map = {
      SEO: "SEO Results",
      WordPress: "Website Design Results",
      "Web Development": "Web Development Results",
      "Digital Marketing": "Digital Marketing Results",
      "IT Projects": "IT Project Results",
    };
    return map[catName] || `${catName} Results`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Our <span className="text-[#EFE5C8]">Portfolio</span>
          </h1>
          <p className="text-gray-400 dark:text-gray-500 text-base">
            Showcase of our latest web development, digital marketing, and IT
            projects
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* search */}
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
            />
          </div>

          {/* category pills */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-colors ${
                activeCategory === "all"
                  ? "bg-red-600 text-white border-red-600"
                  : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 hover:border-red-400"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setActiveCategory(cat._id)}
                className={`text-xs font-medium px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === cat._id
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 hover:border-red-400"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* result count */}
          {!tableLoading && (
            <span className="self-center text-xs text-gray-400 whitespace-nowrap">
              {totalVisible} result{totalVisible !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* Loading skeletons */}
        {tableLoading && (
          <div>
            <div className="h-6 w-48 rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        )}

        {/* Sections */}
        {!tableLoading &&
          Object.entries(grouped).map(([catName, items]) => (
            <PortfolioSection
              key={catName}
              title={sectionTitle(catName)}
              items={items}
            />
          ))}

        {/* Empty state */}
        {!tableLoading && totalVisible === 0 && (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-gray-300 dark:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7m16 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5m16 0H4"
                />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-base">
              No portfolio items found
            </p>
            {search && (
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
                Try a different search term
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

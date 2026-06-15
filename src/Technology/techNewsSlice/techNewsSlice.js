import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch tech news
export const fetchTechNews = createAsyncThunk(
  "techNews/fetchTechNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tech`);
      let items = response.data?.data || [];

      if (!Array.isArray(items)) {
        items = [];
      }

      // Format data (same logic as before)
      const formatted = items.map((item, index) => ({
        id: item._id || `item-${index + 1}`,
        title: item.title || "Untitled",
        description: item.description || "No description available",
        date:
          item.updatedAt || item.createdAt
            ? new Date(item.updatedAt || item.createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                },
              )
            : new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
        category: item.category?.name || "General",
        link: item.link || item.url || "#",
        image: item.images && item.images.length > 0 ? item.images[0] : null,
      }));

      return formatted;
    } catch (err) {
      // Better error handling with axios
      const message =
        err.response?.data?.message ||
        err.message ||
        "Failed to load tech news";
      return rejectWithValue(message);
    }
  },
);

const initialState = {
  items: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  selectedCategory: "All",
};

const techNewsSlice = createSlice({
  name: "techNews",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTechNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTechNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setSelectedCategory } = techNewsSlice.actions;
export default techNewsSlice.reducer;

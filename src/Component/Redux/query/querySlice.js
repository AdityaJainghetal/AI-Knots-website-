import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ─── Async Thunk ────────────────────────────────────────────────────────────
export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (payload, { rejectWithValue }) => {
    try {
      const apiBase = import.meta.env.VITE_API_URL || "";
      const apiUrl = `${apiBase}/api/query/create`;
      console.log("Query submit payload:", payload, "apiUrl:", apiUrl);
      const response = await axios.post(apiUrl, payload);
      return response.data;
    } catch (error) {
      let errorMsg = "Something went wrong. Please try again.";

      if (error.response) {
        errorMsg =
          error.response.data?.message ||
          error.response.data?.error ||
          errorMsg;
      } else if (error.request) {
        errorMsg = "No response from server. Please check your connection.";
      }
      return rejectWithValue(errorMsg);
    }
  },
);

// ─── Initial State ───────────────────────────────────────────────────────────
const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  category: "Other", // Default value as per your schema
};

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formData: initialFormData,
    loading: false,
    successMessage: null,
    errorMessage: null,
  },

  reducers: {
    // Update form fields
    updateField(state, action) {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },

    // Reset form after successful submission
    resetForm(state) {
      state.formData = { ...initialFormData };
      state.successMessage = null;
      state.errorMessage = null;
    },

    // Clear messages
    clearMessages(state) {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.loading = false;
        state.successMessage =
          "Message sent successfully! We'll get back to you soon.";
        state.formData = { ...initialFormData };
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { updateField, resetForm, clearMessages } = contactSlice.actions;
export default contactSlice.reducer;

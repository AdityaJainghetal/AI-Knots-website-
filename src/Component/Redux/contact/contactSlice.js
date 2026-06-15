import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ─── Async Thunk ────────────────────────────────────────────────────────────

export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (payload, { rejectWithValue }) => {
    try {
      const apiBase = import.meta.env.VITE_API_URL || "";
      const apiUrl = `${apiBase}/api/contact/create`;
      console.log("📤 API URL:", apiUrl);
      console.log("📦 Payload:", payload);

      const response = await axios.post(apiUrl, payload);
      console.log("✅ Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error Details:", error);
      let errorMsg = "Something went wrong. Please try again.";

      if (error.response) {
        console.error(
          "Response Error:",
          error.response.status,
          error.response.data,
        );
        errorMsg =
          error.response.data?.message ||
          error.response.data?.error ||
          errorMsg;
      } else if (error.request) {
        console.error("Request Error - No response from server");
        errorMsg =
          "No response from server. Please check if backend is running.";
      } else {
        console.error("Error Message:", error.message);
      }

      return rejectWithValue(errorMsg);
    }
  },
);

// ─── Initial State ───────────────────────────────────────────────────────────

const initialFormData = {
  username: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formData: initialFormData,
    captchaValue: null,
    loading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    // Update any single form field
    updateField(state, action) {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    // Store reCAPTCHA token
    setCaptcha(state, action) {
      state.captchaValue = action.payload;
    },
    // Reset entire form after success
    resetForm(state) {
      state.formData = initialFormData;
      state.captchaValue = null;
      state.successMessage = null;
      state.errorMessage = null;
    },
    // Clear alert messages manually if needed
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
        state.formData = initialFormData;
        state.captchaValue = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { updateField, setCaptcha, resetForm, clearMessages } =
  contactSlice.actions;

export default contactSlice.reducer;

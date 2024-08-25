import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../BASE_URL';

// Create Notification with Authentication Data
export const createNotification = createAsyncThunk(
  'notifications/createNotification',
  async (notificationData, thunkAPI) => {
    try {
      // Get the token from state or localStorage
      const token = thunkAPI.getState().auth.user.token || localStorage.getItem('authToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      };
      console.log(token,config)

      const response = await axios.post(`${url}/api/notifications`, notificationData, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Fetch Notifications
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/api/notifications`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    clearNotificationState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Notification
      .addCase(createNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.notifications.push(action.payload);
      })
      .addCase(createNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Notifications
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNotificationState } = notificationSlice.actions;
export default notificationSlice.reducer;

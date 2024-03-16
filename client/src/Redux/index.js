import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    current_user: null,
    loading: false,
    error: "",
  },
  reducers: {
    signInStart: (state, action) => {
      state.current_user=null,
      state.loading = true;
    },
    signInSuccess: (state, action) => {
        console.log(action);
      (state.current_user = action.payload),
        (state.loading = false)
    },
    signInFail: (state, action) => {
      (state.error = action.payload),
       (state.loading = false);
    },
  },
});
const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const user_actions = userSlice.actions;

export default Store;

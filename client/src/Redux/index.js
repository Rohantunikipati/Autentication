import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";

const userSlice = createSlice({
  name: "user",
  initialState: {
    current_user: null,
    loading: false,
    error: "",
  },
  reducers: {
    signInStart: (state, action) => {
      (state.current_user = null), (state.loading = true);
    },
    signInSuccess: (state, action) => {
      console.log(action);
      (state.current_user = action.payload), (state.loading = false);
    },
    signInFail: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
  },
});

const rootReducer = combineReducers({ user: userSlice.reducer });

const presistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(presistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer
});

export const user_actions = userSlice.actions;
export const persistor =  persistStore(Store);
export default Store;

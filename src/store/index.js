import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

const initialState = {
  name: "",
  age: "",
  bio: "",
  email: "",
  id: "",
  saved: "",
  numOfViewsToday: 0,
  lastResetTime: "",
};

const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    changeCurrentUser(state, action) {
      if (action.payload === "reset") {
        state = {...initialState};
        
      } else {
        state.email = action.payload.email;
        state.age = action.payload.age;
        state.name = action.payload.name;
        state.bio = action.payload.bio;
        state.id = action.payload.id;
        state.saved = action.payload.saved;
        state.numOfViewsToday = action.payload.numOfViewsToday;
        state.lastResetTime = action.payload.lastResetTime;
      }
    },
    changeCurrentUserEmail(state, action) {
      state.email = action.payload;
    },
    changeCurrentUserName(state, action) {
      state.name = action.payload;
    },
    changeCurrentUserAge(state, action) {
      state.age = action.payload;
    },
    changeCurrentUserBio(state, action) {
      state.bio = action.payload;
    },
    changeCurrentUserId(state, action) {
      state.id = action.payload;
    },
    changeCurrentUserSaved(state, action) {
      state.saved = action.payload.arr;
    },
    changeCurrentUserViews(state, action) {
      state.numOfViewsToday = action.payload;
    },
    changeCurrentUserLastResetTime(state, action) {
      state.lastResetTime = action.payload;
    },
  },
});
const persistConfig = {
  key: "root", // key for the persisted data in storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
});

export const actions = userSlice.actions;

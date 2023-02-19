import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbar/navbarSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
	reducer: {
		navbar: navbarReducer,
		user: userReducer,
	}
})
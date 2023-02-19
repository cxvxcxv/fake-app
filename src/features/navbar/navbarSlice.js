import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activePage: "services",
};

const navbarSlice = createSlice({
	name: "navbarSlice",
	initialState,
	reducers: {
		changeActivePage: (state, action) => {
			const newActivePage = action.payload;
			state.activePage = newActivePage;
		},
	},
});

export const { changeActivePage } = navbarSlice.actions;
export default navbarSlice.reducer;
//59:36

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "Аскар А.К.",
	tel: "+77713502500",
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		changeName: (state, action) => {
			const newName = action.payload;
			state.name = newName;
		},
		changeTel: (state, action) => {
			const newTel = action.payload;
			state.tel = newTel;
		},
	},
});

export const { chnageName, changeTel } = userSlice.actions;
export default userSlice.reducer;
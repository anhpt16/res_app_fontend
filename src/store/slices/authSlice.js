import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: null,
    roles: [],
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.roles = action.payload.roles;
        },
        clearUser: (state) => {
            state.id = null;
            state.name = null;
            state.roles = [];
        }
    }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
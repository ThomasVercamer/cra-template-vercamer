import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../types/app.types";

interface IAuthState {
    currentUser: IUser | null;
}

const initialState: IAuthState = {
    currentUser: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload
        },
        signOut: (state) => {
            state =  initialState
        }
    }
});

export const {setUser, signOut} = authSlice.actions;

export default authSlice.reducer;
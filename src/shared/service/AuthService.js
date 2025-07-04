import store from "../../store/store";
import { setUser, clearUser } from "../../store/slices/authSlice";

export const setUserInfo = (userData) => {
    store.dispatch(setUser(userData));
}

export const clearUserInfo = () => {
    store.dispatch(clearUser());
}
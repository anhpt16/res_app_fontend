import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryParamsBuilder } from "../../shared/utils/utils.js";
import { login, register, getUserInfo, logout } from "../api/user.api";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../../store/slices/authSlice";
import { useEffect } from "react";

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
    })
}

export const useRegister = () => {
    return useMutation({
        mutationFn: register,
    })
}

export const useLogout = () => {
    return useMutation({
        mutationFn: logout,
    })
}

export const useAuthInit = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const res = await getUserInfo();
                console.log(res);
                dispatch(setUser(res.data));
            } catch (error) {
                console.log(error);
                if (error?.response?.data?.status === 401) {
                    dispatch(clearUser());
                }
            }
        }
        fetchUserInfo();
    }, []);
    
}
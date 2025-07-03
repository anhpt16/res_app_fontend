import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryParamsBuilder } from "../../shared/utils/utils.js";
import { login, register } from "../api/user.api";

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


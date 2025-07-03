import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
    getDiscountMenu, 
    getDishesByCategory, 
    getDishesComing, 
    getDishesEnding, 
    getDishCategories, 
    getCombos, 
    getComboDetail, 
    getDishesByCombo,
    getDishDetail
} from "../../shared/api/dish.api.js";
import { queryParamsBuilder } from "../../shared/utils/utils.js";


// Lấy danh sách món ăn (phát hành) đang giảm giá
export const useFetchDishesDiscount = () => {
    return useQuery({
        queryKey: ["dishesDiscount"],
        queryFn: () => getDiscountMenu(),
        staleTime: Infinity
    })
}
// Lấy danh sách món ăn sắp ra mắt
export const useFetchDishesComing = () => {
    return useQuery({
        queryKey: ["dishesComing"],
        queryFn: () => getDishesComing(),
        staleTime: Infinity
    })
}
// Lấy danh sách món ăn sắp kết thúc
export const useFetchDishesEnding = () => {
    return useQuery({
        queryKey: ["dishesEnding"],
        queryFn: () => getDishesEnding(),
        staleTime: Infinity
    })
}
// Lấy danh sách danh mục món ăn
export const useFetchCategories = () => {
    return useQuery({
        queryKey: ["dishCategories"],
        queryFn: () => getDishCategories(),
        staleTime: Infinity
    })
}
// Lấy danh sách món ăn (phát hành) theo danh mục
export const useFetchDishesCategory = (categoryId) => {
    return useQuery({
        queryKey: ["dishesCategory", categoryId],
        queryFn: () => getDishesByCategory(categoryId),
        staleTime: Infinity,
        enabled: !!categoryId
    })
}
// Lấy chi tiết món ăn
export const useFetchDishDetail = (dishId) => {
    return useQuery({
        queryKey: ["dishDetail", dishId],
        queryFn: () => getDishDetail(dishId),
        staleTime: Infinity,
        enabled: !!dishId
    })
}
// Lấy danh sách combo (phát hành)
export const useFetchCombos = () => {
    return useQuery({
        queryKey: ["combos"],
        queryFn: () => getCombos(),
        staleTime: Infinity
    })
}
// Lấy chi tiết combo (phát hành)
export const useFetchComboDetail = (comboId) => {
    return useQuery({
        queryKey: ["comboId", comboId],
        queryFn: () => getComboDetail(comboId),
        staleTime: Infinity,
        enabled: !!comboId
    })
}
// Lấy danh sách món ăn của combo (phát hành)
export const useFetchDishesByCombo = (comboId, comboVersionId) => {
    return useQuery({
        queryKey: ["dishesCombo", comboId, comboVersionId],
        queryFn: () => getDishesByCombo(comboId, comboVersionId),
        staleTime: Infinity,
        enabled: !!comboId && !!comboVersionId
    })
}
import axios from "./axios";
// Admin

// Client
// Lấy danh sách các món ăn (phát hành) đang giảm giá
export const getDiscountMenu = async () => {
    return axios.get(`/menu/discount`).then(res => res.data);
}
// Lấy danh sách các món ăn sắp ra mắt
export const getDishesComing = async () => {
    return axios.get(`/menu/coming`).then(res => res.data);
}
// Lấy danh sách các món ăn sắp kêt thúc
export const getDishesEnding = async () => {
    return axios.get(`/menu/ending`).then(res => res.data);
}
// Lấy danh sách danh mục món ăn
export const getDishCategories = async () => {
    return axios.get(`/category`).then(res => res.data);
}
// Lấy danh sách các món ăn (phát hành) theo danh mục
export const getDishesByCategory = async (categoryId) => {
    return axios.get(`/menu/${categoryId}/dishes`).then(res => res.data);
}
// Lấy chi tiết món ăn
export const getDishDetail = async (dishId) => {
    return axios.get(`/dish/${dishId}`).then(res => res.data);
}
// Lấy danh sách combo
export const getCombos = async () => {
    return axios.get(`/combo`).then(res => res.data);
}
// Lấy chi tiết combo
export const getComboDetail = async (comboId) => {
    return axios.get(`/combo/${comboId}`).then(res => res.data);
}
// Lấy danh sách món ăn của combo
export const getDishesByCombo = async (comboId, comboVersionId) => {
    return axios.get(`/combo/${comboId}/combo-version/${comboVersionId}/dishes`).then(res => res.data);
}

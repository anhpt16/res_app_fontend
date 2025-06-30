import axios from "./axios";
// Admin

// Client
// Lấy danh sách các món ăn (phát hành) đang giảm giá
export const getDiscountMenu = async () => {

}
// Lấy danh sách các món ăn (phát hành) theo danh mục
export 
// Lấy danh sách các món ăn sắp ra mắt
// Lấy danh sách các món ăn sắp kêt thúc

// Lấy danh sách bài viết (phát hành)
export const getPosts = async (params) => {
    return axios.get(`/post`, { params: params })
    .then(res => res.data);
}
// Lấy chi tiết bài viết (phát hành)
export const getPostBySlug = async (slug) => {
    return axios.get(`/post/${slug}`)
    .then(res => res.data);
}
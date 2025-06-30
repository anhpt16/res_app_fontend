import axios from "./axios";
// Admin

// Client
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
import axios from "./axios";
// Admin

// Client
// Lấy bộ sưu tập (phát hành)
export const getCollection = async (params) => {
    return axios.get(`/collection`, { params: params })
    .then(res => res.data);
}
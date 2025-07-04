import axios from "axios";
import config from "../utils/env";
import { clearUserInfo } from "../service/AuthService";

// Tạo Axios Instance
const axiosInstance = axios.create({
    baseURL: config.API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
    credentials: "include",
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response

      if (status === 401) {
        console.warn('401 Unauthorized - người dùng chưa đăng nhập hoặc token hết hạn.')
        // Ví dụ: logout, redirect, hoặc thông báo
        clearUserInfo();
      }

      if (status >= 500) {
        console.error('Lỗi server:', error.response.data?.message || 'Server Error')
      }
    } else {
      console.error('Lỗi kết nối hoặc lỗi không xác định')
    }

    return Promise.reject(error)
  }
)

export default axiosInstance;


import React from "react";
/**
 * Tạo hàm xử lý lỗi từ server để dùng với react-hook-form
 * @param {Function} setError - hàm setError từ useForm
 */
export function useServerErrorHandler(setError) {
    return (error) => {
        const responseData = error?.response?.data;
        if (responseData?.data) {
          Object.keys(responseData.data).forEach(fieldName => {
            setError(fieldName, {
              type: "server",
              message: responseData.data[fieldName]
            });
            console.log(`Set error for ${fieldName}:`, responseData.data[fieldName]);
          });
        } else {
          const errorMessage = responseData?.message || "Có lỗi xảy ra";
          console.error("General server error:", errorMessage);
        }
      };
}
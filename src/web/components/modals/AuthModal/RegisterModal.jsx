import { Modal, Input } from "antd";
import "./AuthModal.css";
import { motion } from "framer-motion";
import { useRegister } from "../../../../shared/hooks/useAuth";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useServerErrorHandler } from "../../../../shared/hooks/useServerErrorHandler";
import { toast } from "react-toastify";

const variants = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  animate: { 
    opacity: 1,
    scale: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20
  }
};

export const RegisterModal = ({ onClose, onSwitch }) => {
  const registerMutation = useRegister();
  const { handleSubmit, formState: { errors }, setError, getValues, control, clearErrors } = useForm();
  const handleServerError = useServerErrorHandler(setError);
  const nameValidation = {
    required: "Họ và tên không được để trống",
    pattern: {
      value: /^[\p{L}\s]+$/u,
      message: "Họ và tên không hợp lệ"
    }
  }
  const emailValidation = {
    required: "Email không được để trống",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email không hợp lệ"
    }
  }
  const phoneValidation = {
    required: "Số điện thoại không được để trống",
    pattern: {
      value: /^\d{10}$/,
      message: "Số điện thoại không hợp lệ"
    }
  }
  const usernameValidation = {
    required: "Tên tài khoản không được để trống",
    minLength: {
      value: 6,
      message: "Tên tài khoản phải có ít nhất 6 ký tự"
    },
    pattern: {
      value: /^[a-z0-9]+$/,
      message: "Tên tài khoản không hợp lệ"
    }
  }
  const passwordValidation = {
    required: "Mật khẩu không được để trống",
    minLength: {
      value: 6,
      message: "Mật khẩu phải có ít nhất 6 ký tự"
    }
  }
  const confirmPasswordValidation = {
    required: "Xác nhận mật khẩu không được để trống",
    validate: (value) => {
      const password = getValues("password");
      return value === password || "Mật khẩu không khớp";
    }
  }
  

  const onSubmit = (data) => {
    clearErrors();
    const requestData = {
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      phone: data.phone.trim(),
      username: data.username.trim(),
      password: data.password,
    }
    console.log(requestData);
    registerMutation.mutate(requestData, {
      onSuccess: () => {
        onClose();
        toast.success("Đăng ký thành công");
      },
      onError: (error) => {
        handleServerError(error);
        toast.error(error?.response?.data?.message);
      }
    })
  }
  return (
    <>
      {/* Container cho modal - không có animation opacity */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        {/* Modal content */}
        <motion.div
          className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex max-md:flex-col justify-between w-full">
              <p className="text-2xl font-medium">Đăng Ký Tài Khoản</p>
              <p className="text-base mt-2">
                Bạn đã có tài khoản ?
                <span
                  className="ms-2 text-amber-500 hover:text-amber-600 transform-colors duration-200 cursor-pointer"
                  onClick={onSwitch}
                >
                  Đăng nhập
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 ml-4"
            >
              ×
            </button>
          </div>
          
          <div className="flex max-md:flex-col gap-4 mt-4">
            <div className="w-1/2 max-md:w-full">
              <div className="auth-modal-input">
                <label>Họ và tên</label>
                <Controller
                  control={control}
                  name="name"
                  rules={nameValidation}
                  render={({ field }) => (
                    <Input variant="filled" {...field} />
                  )}
                />
                <div className="min-h-[24px] flex items-start">
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              </div>
              <div className="auth-modal-input">
                <label>Email</label>
                <Controller
                  control={control}
                  name="email"
                  rules={emailValidation}
                  render={({ field }) => (
                    <Input variant="filled" {...field} />
                  )}
                />
                <div className="min-h-[24px] flex items-start">
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
              </div>
              <div className="auth-modal-input">
                <label>Số điện thoại</label>
                <Controller
                  control={control}
                  name="phone"
                  rules={phoneValidation}
                  render={({ field }) => (
                    <Input variant="filled" {...field} />
                  )}
                />
                <div className="min-h-[24px] flex items-start">
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
              </div>
            </div>
            <div className="w-1/2 max-md:w-full">
              <div className="auth-modal-input">
                <label>Tên tài khoản</label>
                <Controller
                  control={control}
                  name="username"
                  rules={usernameValidation}
                  render={({ field }) => (
                    <Input variant="filled" {...field} />
                  )}
                />
                <div className="min-h-[24px] flex items-start">
                  {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>
              </div>
              <div className="auth-modal-input">
                <label>Mật khẩu</label>
                <Controller
                  control={control}
                  name="password"
                  rules={passwordValidation}
                  render={({ field }) => (
                    <Input.Password variant="filled" {...field} />
                  )}
                />
                <div className="min-h-[24px] flex items-start">
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
              </div>
              <div className="auth-modal-input">
                <label>Xác nhận mật khẩu</label>
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={confirmPasswordValidation}
                  render={({ field }) => (
                    <Input.Password variant="filled" {...field} />
                  )}
                />
                <div className="min-h-[24px] flex items-start">
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                </div>
              </div>
            </div>
          </div>
          <p className="my-2 text-red-500 text-sm text-center">
            
          </p>
          <button 
            type="submit"
            className="mt-6 bg-amber-500 hover:bg-amber-400 transition-colors duration-100 text-base text-white font-medium w-full h-10 rounded-xl cursor-pointer"
          >
            Đăng ký
          </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

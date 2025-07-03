import { Modal, Flex, Input, Divider } from "antd";
import { motion } from "framer-motion";
import { GoogleIcon, FacebookIcon } from "../../../../shared/utils/icons/Icons";
import "./AuthModal.css";
import { useState } from "react";
import { useLogin } from "../../../../shared/hooks/useAuth";
import { toast } from "react-toastify";

const modalVariants = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    y: -50
  },
  animate: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    y: -50,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};


export const LoginModal = ({ onClose, onSwitch }) => {
  const loginMutation = useLogin();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    console.log(formData);
    loginMutation.mutate(formData, {
      onSuccess: () => {
        onClose();
        toast.success("Đăng nhập thành công");
      },
      onError: (error) => {
        setErrorMessage(error?.response?.data?.message);
      }
    });
  }


  return (
    <>
      {loginMutation.isPending && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-700">Đang đăng nhập...</p>
          </div>
        </div>
      )}
      {/* Container - không có animation opacity */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Modal content - chỉ modal có scale và slide animation */}
        <motion.div
          className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto"
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-2xl font-medium">Đăng Nhập</p>
              <p className="text-base mt-2">
                Bạn không có tài khoản ?
                <span
                  className="ms-2 text-amber-500 cursor-pointer hover:text-amber-600 transition-colors duration-100"
                  onClick={onSwitch}
                >
                  Đăng ký
                </span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ×
            </button>
          </div>
          
          <div className="auth-modal-input">
            <Flex vertical gap={20}>
              <Input placeholder="Tên tài khoản" variant="filled" onChange={(e) => handleInputChange("username", e.target.value)} value={formData.username} />
              <Input.Password placeholder="Mật khẩu" variant="filled" onChange={(e) => handleInputChange("password", e.target.value)} value={formData.password} />
            </Flex>
          </div>
          
          <p className="mt-3 text-end text-base text-amber-500 cursor-pointer hover:text-amber-600 transition-colors duration-100">
            Quên mật khẩu?
          </p>
          <p className="my-2 text-red-500 text-sm text-center">
            {errorMessage && errorMessage}
          </p>
          <button onClick={handleSubmit} className="mt-3 bg-amber-500 hover:bg-amber-400 transition-colors duration-100 text-base text-white font-medium w-full h-10 rounded-xl cursor-pointer">
            Đăng nhập
          </button>
          
          <div className="my-6">
            <Divider>
              <span className="text-sm text-gray-400">hoặc</span>
            </Divider>
          </div>
          
          <div className="flex justify-center gap-6">
            <button className="flex items-center gap-2 border py-2 px-5 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-100">
              <GoogleIcon className="w-6 h-6" />
              <span className="text-sm text-gray-400">Google</span>
            </button>
            <button className="flex items-center gap-2 border py-2 px-5 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-100">
              <FacebookIcon className="w-6 h-6" />
              <span className="text-sm text-gray-400">Facebook</span>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

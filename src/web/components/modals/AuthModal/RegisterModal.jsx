import { Modal, Input } from "antd";
import "./AuthModal.css";
import { motion } from "framer-motion";

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
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 ml-4"
            >
              ×
            </button>
          </div>
          
          <div className="flex max-md:flex-col gap-4 mt-4">
            <div className="w-1/2 max-md:w-full space-y-6">
              <div className="auth-modal-input">
                <label>Họ và tên</label>
                <Input variant="filled" />
              </div>
              <div className="auth-modal-input">
                <label>Email</label>
                <Input variant="filled" />
              </div>
              <div className="auth-modal-input">
                <label>Số điện thoại</label>
                <Input variant="filled" />
              </div>
            </div>
            <div className="w-1/2 max-md:w-full space-y-6">
              <div className="auth-modal-input">
                <label>Tên tài khoản</label>
                <Input variant="filled" />
              </div>
              <div className="auth-modal-input">
                <label>Mật khẩu</label>
                <Input.Password variant="filled" />
              </div>
              <div className="auth-modal-input">
                <label>Xác nhận mật khẩu</label>
                <Input.Password variant="filled" />
              </div>
            </div>
          </div>
          
          <button className="mt-6 bg-amber-500 hover:bg-amber-400 transition-colors duration-100 text-base text-white font-medium w-full h-10 rounded-xl cursor-pointer">
            Đăng ký
          </button>
        </motion.div>
      </div>
    </>
  );
};

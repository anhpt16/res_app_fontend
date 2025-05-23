import { Modal, Input } from "antd";
import { motion } from "framer-motion";
import "./AuthModal.css";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const RegisterModal = ({ open, onClose, onSwitch }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
      width={800}
      className="auth-modal"
    >
      <motion.div
        key="register"
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <div className="flex max-md:flex-col justify-between">
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
              <label>Nhập lại mật khẩu</label>
              <Input.Password variant="filled" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="w-1/2 max-md:w-full pe-2 max-md:pe-0">
            <button className="mt-3 bg-amber-500 hover:bg-amber-400 transition-colors duration-200 text-base text-white font-medium w-full h-10 rounded-xl cursor-pointer">
              Đăng ký
            </button>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

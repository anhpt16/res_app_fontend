import { Modal, Flex, Input, Divider } from "antd";
import { motion } from "framer-motion";
import { GoogleIcon, FacebookIcon } from "../../../../shared/utils/icons/Icons";
import "./AuthModal.css";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const LoginModal = ({ open, onClose, onSwitch }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
      width={400}
      className="auth-modal"
    >
      <motion.div
        key="login"
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.6 }}
      >
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
        <div className="mt-4 auth-modal-input">
          <Flex vertical gap={20}>
            <Input placeholder="Tên tài khoản" variant="filled" />
            <Input.Password placeholder="Mật khẩu" variant="filled" />
          </Flex>
        </div>
        <p className="mt-3 text-end text-base text-amber-500 cursor-pointer hover:text-amber-600 transition-colors duration-100">
          Quên mật khẩu?
        </p>
        <button className="mt-3 bg-amber-500 hover:bg-amber-400 transition-colors duration-100 text-base text-white font-medium w-full h-10 rounded-xl cursor-pointer">
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
    </Modal>
  );
};

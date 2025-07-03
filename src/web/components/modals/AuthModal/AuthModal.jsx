import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import "./AuthModal.css";

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const AuthModal = ({ open, close }) => {
  const [authMode, setAuthMode] = useState("login"); // login | register

  // Chuyển modal
  const switchModal = () => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={close}
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <AnimatePresence mode="wait">
              {authMode === "login" && (
                <LoginModal
                  key="login"
                  onClose={close}
                  onSwitch={switchModal}
                />
              )}
              {authMode === "register" && (
                <RegisterModal
                  key="register"
                  onClose={close}
                  onSwitch={switchModal}
                />
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

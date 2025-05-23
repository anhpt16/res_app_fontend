import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import "./AuthModal.css";

export const AuthModal = ({ open, close }) => {
  const [authMode, setAuthMode] = useState("login"); // login | register

  // Chuyển modal
  const switchModal = () => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {open && authMode === "login" && (
          <LoginModal
            open={open}
            onClose={close}
            onSwitch={switchModal}
          />
        )}
        {open && authMode === "register" && (
          <RegisterModal
            open={open}
            onClose={close}
            onSwitch={switchModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

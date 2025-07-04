import { AppRoute } from "./shared/routes/AppRoute";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { useAuthInit } from "./shared/hooks/useAuth";

function App() {
  useAuthInit();
  return (
    <>
      <AppRoute/>
      <ToastContainer />    
    </>
  )
}

export default App

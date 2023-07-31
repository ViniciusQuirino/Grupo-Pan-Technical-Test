import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import "./color.css";
import "./App.css";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ForgetPasswordEmail from "./components/ForgetPasswordEmail";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Dashboard />} />
        <Route path="/verify-email/:token" element={<Dashboard />} />
        <Route path="/forget-password" element={<ForgetPasswordEmail/>} />
        <Route path="/forget-password/:token" element={<ResetPassword/>} />
      </Routes>
      <ToastContainer limit={1} autoClose={1500} />
    </div>
  );
}

export default App;

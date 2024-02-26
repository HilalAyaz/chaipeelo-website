import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getToastSettings = () => ({
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  zIndex: 9999,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer {...getToastSettings()} />
  </React.StrictMode>
);

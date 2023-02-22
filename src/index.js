import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/contact";
import { Content } from "antd/es/layout/layout";
import RoomDetails from "./pages/room-details/index"
import HostelRegistrationForm from "./pages/hostel-registration-form/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="room-details" element={<RoomDetails />} />
          <Route path="hostel-registration" element={<HostelRegistrationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

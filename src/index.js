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
import Notification from "./pages/Notification/notification";
import Review from "./pages/Review/review";
import { Content } from "antd/es/layout/layout";
import Attendance from "./pages/Attendance/Attendance";
import Chart from "./pages/chart/chart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="review" element={<Review />} />
          <Route path="chart" element={<Chart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Logo from "../../assests/logocuh.png";
import Image from "../../assests/tree.jpg";
import "./dashboard.css";
import { Menu } from "antd";
import {
  AppstoreFilled,
  BookOutlined,
  ContactsOutlined,
  HomeFilled,
  PaperClipOutlined,
} from "@ant-design/icons";
const Dashboard = () => {
  const Navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    // return <Navigate replace to="/login" />;
    console.log("hello from dashboard");
  } else {
    return (
      <div className="dashboard_container">
        {/* header part */}
        <div className="dashboard_header">
          <img src={Logo} alt="logo" className="cuh_logo" />
          <div className="dashboard_logout">
            <i class="bi bi-bell-fill"></i>
            <button className="dashboard_button">logout</button>
          </div>
        </div>
        {/* header part */}

        {/* main-section */}
        <div className="dashboard_main_section">
          <div className="dashboard_sidebar">
            <div className="dashboard_profile">
              <img src={Image} alt="image" height={100} width={100} />
              <div className="dash_user">
                <p>
                  Hello!
                  <br /> User
                </p>
              </div>
            </div>
            <div className="dash_route">
              <Menu
                onClick={({ key }) => {
                  Navigate(key);
                  console.log("hello");
                }}
                defaultSelectedKeys={[window.location.pathname]}
                items={[
                  {
                    label: "Home",
                    key: "/dashboard/home",
                    icon: <AppstoreFilled />,
                  },
                  {
                    label: "Academics",
                    icon: <BookOutlined />,
                    children: [
                      { label: "Student Subject", key: "" },
                      { label: "Time Table", key: "" },
                      { label: "Attendence", key: "" },
                      { label: "Minor Program Registration", key: "" },
                    ],
                  },
                  {
                    label: "Examination",
                    icon: <PaperClipOutlined />,
                    children: [
                      { label: "Internal Marks Details", key: "" },
                      { label: "Earlier Marks Details", key: "" },
                      { label: "Current Semester Result", key: "" },
                      { label: "Exam Marks Details", key: "" },
                      { label: "Exam Registration", key: "" },
                    ],
                  },
                  {
                    label: "Hostel",
                    icon: <HomeFilled />,
                    children: [
                      { label: "Hostel Room Detail", key: "" },
                      { label: "Instruction Guide", key: "" },
                    ],
                  },
                  {
                    label: "Contact Us",
                    key: "/dashboard/contact",
                    icon: <ContactsOutlined />,
                  },
                ]}
                className="dash_menu"
              >
                {" "}
              </Menu>
            </div>
          </div>
          <div className="dashboard_outlet">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;

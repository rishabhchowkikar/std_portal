import { useEffect, useState } from "react";

import Logo from "../../assests/logocuh.png";
import Image from "../../assests/tree.jpg";
import "./dashboard.css";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons/lib/components/AntdIcon";
const Dashboard = () => {
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
                items={[
                  { label: "Home" },
                  { label: "Academics" },
                  { label: "Examination" },
                  { label: "Hostel" },
                  { label: "Contact Us" },
                ]}
                className="dash_menu"
              >
                {" "}
              </Menu>
            </div>
          </div>
          <div className="dashboard_outlet">there would be outlet</div>
        </div>
      </div>
    );
  }
};

export default Dashboard;

import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaGem, FaGithub } from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { SiSemanticuireact } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  const { collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              // display: "flex", // Sử dụng flexbox để căn chỉnh các phần tử
              // alignItems: "center", // Căn giữa theo chiều dọc
              padding: "24px",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <SiSemanticuireact
              size={"2em"}
              color={"#00bfff"}
              style={{ marginRight: "10px" }}
            />
            {/* Thêm margin phải để tạo khoảng cách giữa logo và tiêu đề */}
            <span>Project 1</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard />}>
              <NavLink to="/admins">Dashboard</NavLink>
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              suffix={<span className="badge yellow">3</span>}
              icon={<FaGem />}
              title={"Feature"}
            >
              <MenuItem>
                <NavLink to="/admins/manage-user"> Quản lý users</NavLink>
              </MenuItem>
              <MenuItem> Quản lý bài quiz</MenuItem>
              <MenuItem> Quản lý câu hỏi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/bebup95/test_react/commits/prod"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                Link Desc
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;

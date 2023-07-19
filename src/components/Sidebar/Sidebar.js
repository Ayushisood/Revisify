import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

import {
  AiOutlineLeft,
  AiFillCaretRight,
  AiFillCaretDown,
} from "react-icons/ai";
import { linksArray } from "../../constants";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";
import { SidebarWrapper } from "./styles";

export const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SidebarWrapper isOpen={sidebarOpen}>
      <>
        <button
          isOpen={sidebarOpen}
          onClick={() => {
            setSidebarOpen((p) => !p);
            setDropdownOpen(false);
          }}
          className="sidebar-button"
        >
          <AiOutlineLeft />
        </button>
      </>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="divider"></div>
      {linksArray.map(({ icon, label, to, subLinks }) => (
       <><div key={label} isActive={pathname === to} className="sidebar-content">
          {!subLinks ? (
            <Link
              to={label !== "Logout" ? to : "/"}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
              className="link-style"
            >
              <div className="link-icon">{icon}</div>
              {sidebarOpen && <span className="link-label">{label}</span>}
            </Link>
          ) : (
            <Link
              to={to}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
              className="link-style"
            >
              <div className="link-icon">{icon}</div>
              {sidebarOpen && (
                <div
                  className="dropdown-link"
                  onClick={() => setDropdownOpen((p) => !p)}
                >
                  <span className="link-label">{label}</span>
                  <span className="dropdown-icon">
                    {dropdownOpen ? <AiFillCaretDown /> : <AiFillCaretRight />}
                  </span>
                </div>
              )}
            </Link>
          )}
        </div>
        {dropdownOpen &&
            subLinks &&
            subLinks.map(({ label, to }) => (
              <div
                key={label}
                isActive={pathname === to}
                className="dropdown-content"
              >
                <Link
                  to={to}
                  style={!sidebarOpen ? { width: `fit-content` } : {}}
                  className="dropdown-content-link"
                >
                  {sidebarOpen && <span className="link-label">{label}</span>}
                </Link>
              </div>
            ))}
        </>
      ))}
      <div className="divider"></div>
      <div className="theme-class">
        {sidebarOpen && <div>Dark Mode</div>}
        <button
          className="theme-toggle-container"
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <div
            className="theme-toggle"
            style={theme === "dark" ? { right: "1px" } : {}}
          />
        </button>
      </div>
    </SidebarWrapper>
  );
};

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import { deleteCookie } from "../utils/cookie";

import { Link, useNavigate, useLocation } from "react-router";
import { FiLogOut } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";

import styles from "./Header.module.css";

const Header = () => {
  const [showBox, setShowBox] = useState(false);
  const { refetch } = useQuery({ queryKey: ["profile"], queryFn: getProfile });
  const location = useLocation();

  const isAuthPage = location.pathname === "/auth";

  const navigate = useNavigate();

  const logOutHandler = () => {
    ["accessToken", "refreshToken"].forEach(deleteCookie);
    navigate("/auth");
    refetch();
  };
  return (
    <header id={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      {!isAuthPage && (
        <div>
          <Link to="/auth" onMouseEnter={() => setShowBox(true)}>
            <span>
              <img src="profile.svg" />
              <p>دیوار‌من</p>
            </span>
          </Link>
          <Link to="/dashboard" className={styles.button}>
            ثبت اگهی
          </Link>
        </div>
      )}
      <div
        className={showBox ? styles.menu : styles.hide}
        onMouseLeave={() => setShowBox(false)}
      >
        <div>
          {
            <Link to="/admin">
              <MdAdminPanelSettings />
              <span>پنل ادمین</span>
            </Link>
          }
        </div>
        <div>
          {
            <button onClick={logOutHandler} className={styles.logoutBtn}>
              <FiLogOut />
              <span>خروج</span>
            </button>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;

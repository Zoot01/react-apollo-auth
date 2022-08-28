import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { SiApollographql } from "react-icons/si";
import { FiBell, FiPlus, FiChevronDown } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import HoverScaleAnimation from "../UI/HoverScaleAnimation";
import AvatarDropdown from "../AvatarDropdown/AvatarDropdown";

const Header = () => {
  const { state } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HoverScaleAnimation scale={1.025}>
          <a href="/">
            <div className={styles.logo}>
              <SiApollographql size={38} />
              <span className={styles.logoName}>
                <span className={styles.underline}>auth</span>apollo
              </span>
            </div>
          </a>
        </HoverScaleAnimation>
      </div>
      <div className={styles.right}>
        {state._id && (
          <>
            <div className={styles.buttonContainer}>
              <FiBell size={18} />
            </div>
            <div className={styles.buttonDropdownContainer}>
              <FiPlus size={20} />
              <FiChevronDown size={13} />
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <AvatarDropdown />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

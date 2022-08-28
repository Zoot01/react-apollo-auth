import { motion } from "framer-motion";
import { SyntheticEvent, useContext, useState } from "react";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext, Types } from "../../context/AuthContext";
import { useLogoutUserMutation } from "../../generated/graphql";
import styles from "./AvatarDropdown.module.scss";

const linkItems: { to: string; title: string; clickable: boolean }[] = [
  {
    to: "https://github.com/Zoot01?tab=repositories",
    title: "Your profile",
    clickable: true,
  },
  { to: "/", title: "Your posts", clickable: false },
  { to: "/", title: "Your friends", clickable: false },
  { to: "/", title: "Your comments", clickable: false },
  { to: "/", title: "Settings", clickable: false },
];

const dropdownMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.25,
      delay: 0.1,
    },
    display: "flex",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.25,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const AvatarDropdown = () => {
  let navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);

  const [logoutUser] = useLogoutUserMutation({
    onCompleted(data) {
      if (data.LogoutUser?.logoutSuccess) {
        dispatch({
          type: Types.Logout,
          payload: {
            avatarImg: null,
            email: null,
            handle: null,
            name: null,
            role: null,
            _id: null,
          },
        });
        navigate({ pathname: "/" }, { replace: true });
        toast.info(`See you soon, ${state.name}`);
      }
    },
  });

  return (
    <>
      <motion.div onClick={() => setIsHovering(!isHovering)}>
        <div className={styles.avatarDropdownContainer}>
          {state.avatarImg && (
            <>
              <img
                src={state.avatarImg}
                alt={`${state.handle}-avatar-img`}
                height={20}
                width={20}
              />
              <motion.div
                animate={{
                  rotate: isHovering ? 180 : 0,
                }}
                transition={{ delay: 0.1, duration: 0.25 }}
                className={styles.centerItems}
              >
                <FiChevronDown size={13} />
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
      <motion.div
        className={styles.menuContainer}
        initial="exit"
        animate={isHovering ? "enter" : "exit"}
        variants={dropdownMenuAnimate}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <div className={styles.signedInUser}>
          Signed in as
          <span className={styles.userHandel}>@{state.handle}</span>
        </div>
        <div className={styles.dropdownDivider} />
        <div className={styles.menuLinksContainer}>
          {linkItems &&
            linkItems.map((i, index: number) => {
              return (
                <a
                  key={index}
                  href={i.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i.clickable
                      ? styles.linkItem
                      : styles.linkItem + " " + styles.disabled
                  }
                >
                  <motion.div whileHover={i.clickable ? { scale: 0.9 } : {}}>
                    {i.title}
                  </motion.div>
                </a>
              );
            })}
        </div>
        <div className={styles.dropdownDivider} />
        <div
          className={styles.signOutButton}
          onClick={(e: SyntheticEvent) => logoutUser()}
        >
          <FiLogOut />
          Sign Out
        </div>
      </motion.div>
    </>
  );
};

export default AvatarDropdown;

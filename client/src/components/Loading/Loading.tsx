import React from "react";
import styles from "./Loading.module.scss";
import { motion } from "framer-motion";

const transition = {
  repeat: Infinity,
  ease: "linear",
  duration: 0.5,
};

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerSontainer}>
        <motion.span
          className={styles.spinner}
          animate={{ rotate: 360 }}
          transition={transition}
        />
      </div>
    </div>
  );
};

export default Loading;

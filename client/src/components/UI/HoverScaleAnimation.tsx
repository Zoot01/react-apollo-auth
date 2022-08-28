import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const HoverScaleAnimation = ({
  children,
  scale,
}: {
  children: ReactNode | null;
  scale?: number;
}) => {
  return (
    <motion.div whileHover={{ scale: scale || 1.1 }}>{children}</motion.div>
  );
};

export default HoverScaleAnimation;

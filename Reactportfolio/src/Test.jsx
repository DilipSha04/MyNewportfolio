import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <div className="testing">
      <motion.div
        className="box"
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ }}
        transition={{ duration: 1}}
        whileInView={{opacity: 1, scale: 1}}
        drag
      ></motion.div>
    </div>
  );
};

export default Test;

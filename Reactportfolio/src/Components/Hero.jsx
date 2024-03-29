import React from "react";
import "./Hero.scss";
import { animate, motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DILIP SHARMA</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} whileHover={{backgroundColor: "orange", color: "black"}}>
              <a href="https://drive.google.com/file/d/1kgTQD_ttChWyJfjzewSLSykrXsCRGTQ-/view?usp=drive_link">Resume</a>
            </motion.button>
            <motion.button variants={textVariants} whileHover={{backgroundColor: "orange", color: "black"}}>
              {" "}
              <a href="#Contact">Hire Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/img/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        animate="animate"
        initial="initial"
      >
        React Developer & Web designer
      </motion.div>
      <div className="imageContainer">
        <img className="img" src="/img/hero.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;

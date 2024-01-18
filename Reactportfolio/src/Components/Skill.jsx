import React, { useRef } from "react";
import "./Skill.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Skill = () => {
  return (
    <motion.div
      className="skill"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="mainContainer" variants={variants}>
        <motion.h1 variants={variants}>
          <motion.b whileHover={{color: "orange"}}> My Skills</motion.b>
          <hr />
        </motion.h1>
        <motion.div className="conentCont" variants={variants}>
          <motion.div className="textContainer" variants={variants}>
            <p>
              I possess a strong frontend skill set, excelling in React, Redux,
              JavaScript, and Tailwind CSS. My proficiency extends to crafting
              visually appealing designs with HTML, CSS, and SCSS. Additionally,
              I bring creativity to projects through the use of the Framer
              animation library. With a keen eye for detail, I am well-prepared
              to contribute to innovative and user-centric frontend development.
            </p>
          </motion.div>
          <motion.div className="iconContainer" variants={variants}>
            <motion.div
              className="imgContainer"
              variants={slideVariants}
              initial="initial"
              animate="animate"
            >
              <motion.img src="/img/redux.png" alt="" />
              <motion.img src="/img/html.svg" alt="" />
              <motion.img src="/img/javascript-logo-svgrepo-com.svg" alt="" />
              <motion.img src="/img/github.svg" alt="" />
              <motion.img src="/img/react-svgrepo-com.svg" alt="" />
              <motion.img src="/img/tailwind.svg" alt="" />
              <motion.img src="/img/vite.svg" alt="" />
              <motion.img src="/img/babel.svg" alt="" />
              <motion.img src="/img/css3-svgrepo-com.svg" alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skill;

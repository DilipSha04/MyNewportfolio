import React from "react";
import "./AboutMeInfo.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};
const AboutMeInfo = () => {
  return (
    <>
    <div className="mobile">
    <div
        className="aboutMeInfo_mobile"
      >
        <div className="quoteContainer" >
          <p>
            “Tell me and I forget, teach me and I may remember,
            <br />
            involve me and I learn.” — Benjamin Franklin
          </p>
          <hr />
        </div>
        <div className="titleContainer">
          <img
            src="/public/img/coding2.jpg"
            alt=""
          />
          <h1>Education</h1>
        </div>
        <div className="eduContent">
          <div className="college">
            <span>College:</span> <br />
            <h3>Career College Bhopal</h3>
            <br />
            <span>Degree:</span>
            <br />
            <p>BSc in Information Technology</p>
          </div>
          <div className="school">
            <span>School</span>
            <br />
            <h3>Vaishnavi Public school</h3>
            <br />
            <span>Higher Sec.</span>
            <br />
            <p>Science - Maths,Physics, Chemsitry</p>
          </div>
        </div>
        <img
          className="studenImg"
          src="/public/img/student.png"
          alt=""
        />
      </div>
    </div>
      <div className="desktop">
      <motion.div
        className="aboutMeInfo desktop"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="quoteContainer" variants={variants}>
          <p>
            “Tell me and I forget, teach me and I may remember,
            <br />
            involve me and I learn.” — Benjamin Franklin
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/public/img/coding2.jpg"
            alt=""
          />
          <h1>Education</h1>
        </motion.div>
        <motion.div className="eduContent" variants={variants}>
          <motion.div className="college" variants={variants}>
            <span>College:</span> <br />
            <h3>Career College Bhopal</h3>
            <br />
            <span>Degree:</span>
            <br />
            <p>BSc in Information Technology</p>
          </motion.div>
          <motion.div className="school" variants={variants}>
            <span>School</span>
            <br />
            <h3>Vaishnavi Public school</h3>
            <br />
            <span>Higher Sec.</span>
            <br />
            <p>Science - Maths,Physics, Chemsitry</p>
          </motion.div>
        </motion.div>
        <img
          className="studenImg"
          src="/public/img/student.png"
          variants={variants}
          alt=""
        />
      </motion.div>
      </div>
    </>
  );
};

export default AboutMeInfo;

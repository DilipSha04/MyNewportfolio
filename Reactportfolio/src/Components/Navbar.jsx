import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Portfolio</motion.span>
        <div className="social">
          <a href="">
            <img
              className="social-img"
              src="/img/github (2).png"
              alt=""
            />
          </a>
          <a href="">
            <img className="social-img" src="/img/linkedin.png" alt="" />
          </a>
          <a href="">
            <img className="social-img" src="/img/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

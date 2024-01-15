import React, { useState } from "react";
import "./sidebar.scss";
import Link from "./Link";
import {motion} from "framer-motion"
import ToggleButton from "./ToggleButton";

const variants = {
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stifness:40,
        }
    },
    closed:{
        clipPath: "circle(20px at 50px 45px)",
        transition:{
            delay:0.3,
            type:"spring",
            stifness:400,
            damping: 40,
        }
    }
}
const Sidebar = () => {

    const [open, setOpen] = useState(false);


  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Link />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

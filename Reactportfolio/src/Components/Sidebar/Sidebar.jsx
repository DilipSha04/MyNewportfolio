import React, { useState } from "react";
import "./sidebar.scss";
import Link from "./Link";
import {motion} from "framer-motion"
import ToggleButton from "./ToggleButton";

const Sidebar = () => {

    const [open, setOpen] = useState(false);


    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stifness:20,
            }
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.3,
                type:"spring",
                stifness:400,
                damping: 40,
            }
        }
    }
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

import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "NetflixGPT",
    img: "/public/img/netflixGpt.png",
    description:
      "Experience entertainment like never before with the NetflixGPT app. Seamlessly integrating TMDB API for an extensive movie library, the application features an intelligent search and suggestion system powered by ChatGPT 3.5 API. Built using React, Redux Toolkit, Tailwind CSS, and Firebase for authentication, this project showcases a sleek design and cutting-edge technology.",
  },
  {
    id: 2,
    title: "Bigbite",
    img: "/public/img/bigbite.png",
    description:
      "Indulge your taste buds with the BigBite food ordering app, a culinary adventure crafted with innovation. Leveraging Swiggy's API for a vast and diverse menu, the application boasts features like easy menu navigation, seamless item addition to the cart, and a streamlined checkout process. Developed with React, Redux Toolkit, Tailwind CSS, and Parcel Bundler, this app delivers a delightful user experience. With a responsive interface and efficient routing, BigBite ensures a hassle-free journey from menu exploration to satisfying your cravings. ",
  },
  {
    id: 3,
    title: "FunTube",
    img: "/public/img/youtube.png",
    description:
      "Embark on an immersive YouTube journey with the YouTube Explorer app, leveraging the YouTube API for diverse content access. Packed with features like debouncing for efficient search, API pooling for live chat, and infinite scroll, the app guarantees a dynamic and user-friendly experience. Developed using React, Redux, Tailwind CSS, and Router, it offers seamless navigation and a sleek design. With a focus on optimization, the YouTube Explorer app ensures a snappy interface for effortless content discovery, redefining how you explore and enjoy YouTube.",
  },
  {
    id: 4,
    title: "Vanila Js App",
    img: "/public/img/feedback.png",
    description:
      "Experience the simplicity and elegance of the Feedback Form app, a small yet impactful demonstration of HTML, CSS, and vanilla JavaScript. This application showcases the art of DOM manipulation with a beautiful user interface. With minimalistic design elements, the app makes providing feedback a seamless and visually pleasing experience. Explore the harmony of functionality and aesthetics, highlighting the power of client-side scripting for an engaging and efficient user interaction.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="proContainer">
        <div className="wrapper">
          <div className="subWrapper">
            <div className="imgContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="buttons">
                <button>See Demo</button>
                <button>See Code</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;

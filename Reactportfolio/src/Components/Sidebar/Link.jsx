import React from "react";

const Link = () => {
  const items = ["Homepage", "Projects", "Education", "Contact"];
  return (
    <div className="link">
      {items.map((item) => (
        <a href={`#${item}`} key={item} >{item}</a>
      ))}
    </div>
  );
};

export default Link;

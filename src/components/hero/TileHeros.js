import React, { useState } from "react";
import { motion } from "framer-motion";
import { mainTexts } from "./mainTexts";
import { sideTexts } from "./sideTexts";

const TileHero = ({ id, mainText, sideText }) => {
  const variants = {
    initial: {
      clipPath: "polygon(0 100%, 0 100%, 0 100%, 0% 100%)",
      filter: "sepia(1) hue-rotate(0deg)",
    },
    animate: {
      filter: [
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(90deg)",
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(65deg)",
        "sepia(1) hue-rotate(40deg)",
        "sepia(1) hue-rotate(55deg)",
        "sepia(1) hue-rotate(85deg)",
        "sepia(1) hue-rotate(55deg)",
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(77deg)",
        "sepia(1) hue-rotate(42deg)",
        "sepia(1) hue-rotate(65deg)",
        "sepia(1) hue-rotate(95deg)",
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(57deg)",
        "sepia(1) hue-rotate(63deg)",
        "sepia(1) hue-rotate(55deg)",
        "sepia(1) hue-rotate(75deg)",
        "sepia(0) hue-rotate(0deg)",
      ],
      clipPath: [
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 26% 0, 100% 0, 100% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 23% 100%, 23% 33%, 100% 33%, 100% 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 0 100%, 0 25%, 100% 25%, 100% 75%, 0 75%, 0 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 25% 100%, 25% 0, 74% 0, 75% 100%, 26% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 400%, 400% 300%, 400% 0, -100% -100%)",
      ],
    },
    exit: {
      clipPath: [
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 26% 0, 100% 0, 100% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 23% 100%, 23% 33%, 100% 33%, 100% 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 0 100%, 0 25%, 100% 25%, 100% 75%, 0 75%, 0 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 25% 100%, 25% 0, 74% 0, 75% 100%, 26% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(0 100%, 0 100%, 0 100%, 0 100%)",
      ],
    },
  };
  return (
    <>
      <motion.div
        className="tileHero"
        id={id}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          velocity: "10",
          stiffness: 1000,
          restSpeed: 0.5,
          duration: 1,
          delay: 1,
        }}
      >
        <h3>{sideText}</h3>
        <h1 data-before={mainText}>{mainText}</h1>
      </motion.div>
    </>
  );
};

const TileHeros = () => {
  const defaultItems = [...Array(8)];
  const [items] = useState(defaultItems);
  return (
    <>
      {items.map((_, index) => (
        <TileHero
          mainText={mainTexts[index]}
          sideText={sideTexts[index]}
          id={"tile" + index + "hero"}
          key={index}
          index={index}
        />
      ))}
    </>
  );
};

export default TileHeros;

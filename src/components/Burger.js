import React from "react";
import { motion } from "framer-motion";

const bunTopVariants = {
  visible: {
    y: [0, -1.5],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
      ease: "easeOut",

    }
  }
}
const rectangleVariantsUp = {
  visible: {
    y: [0, -0.5],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
      ease: "easeOut",

    }
  }
}
const rectangleVariantsDown = {
  visible: {
    y: [0, 0.5],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
      ease: "easeOut",

    }
  }
}
const bunBottomVariants = {
  visible: {
    y: [0, 1.5],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
      ease: "easeOut",

    }
  }
}
function Burger() {
  return (
    <svg
    className='burger-svg'
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      width="20mm"
      height="17mm"
      version="1.1"
      viewBox="0 0 20 17"
    >
      <g
        id="layer1"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        paintOrder="fill markers stroke"
      >
        {/* Bun top  */}
        <motion.g id="bun-top"
          variants = {bunTopVariants}
          animate = 'visible'
        >
          <path
            id="path18"
            fill="#000"
            fillOpacity="0"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="0.877"
            d="M10.015.476A9.511 6.694 0 00.514 7.138h19.022A9.511 6.694 0 0010.025.476a9.511 6.694 0 00-.01 0z"
            stopColor="#000"
          ></path>
          <ellipse
            id="path21"
            cx="3.443"
            cy="5.206"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse23"
            cx="4.58"
            cy="3.449"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse25"
            cx="13.937"
            cy="3.862"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse27"
            cx="6.441"
            cy="3.242"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse29"
            cx="11.145"
            cy="4.586"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse31"
            cx="8.716"
            cy="1.898"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse33"
            cx="14.144"
            cy="2.673"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse35"
            cx="11.869"
            cy="2.725"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse37"
            cx="16.728"
            cy="4.638"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse39"
            cx="7.733"
            cy="5.155"
            fill="#fff"
            strokeWidth="0.077"
            rx="0.192"
            ry="0.184"
            stopColor="#000"
          ></ellipse>
        </motion.g>

        {/* middle */}
        <motion.rect
          variants = { rectangleVariantsUp}
          animate  = 'visible'
          id="rect875"
          width="16.943"
          height="0.02"
          x="1.553"
          y="8.678"
          fill="#000"
          fillOpacity="0"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="0.504"
          ry="0.01"
          stopColor="#000"
        ></motion.rect>
        
        
        <motion.rect
          variants={rectangleVariantsDown}
          animate='visible'
          id="rect877"
          width="16.943"
          height="0.02"
          x="1.553"
          y="10.498"
          fill="#000"
          fillOpacity="0"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="0.504"
          ry="0.012"
          stopColor="#000"
        ></motion.rect>
        
        {/* Bun bottom */}
        <motion.rect
          variants={bunBottomVariants}
          animate='visible'
          id="rect48"
          width="19.023"
          height="4.446"
          x="0.514"
          y="11.932"
          fill="#000"
          fillOpacity="0"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="0.877"
          ry="1.654"
          stopColor="#000"
        ></motion.rect>
      </g>
    </svg>
  );
}

export default React.memo(Burger);
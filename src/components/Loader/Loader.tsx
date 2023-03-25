import * as React from "react";
import "./Loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="loader-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="loader"
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          className="loader-stroke"
          cx="50"
          cy="50"
          fill="none"
          stroke="#e15b64"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;

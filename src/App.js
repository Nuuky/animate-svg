import React from "react";
import "./styles.scss";
import AnimatedLogo from "./components/AnimatedLogo";
export default function App() {
  const strokeSize = 3;
  return (
    <div className="App">
      <svg width="266" height="69" viewBox="0 0 266 69" fill="none">
        <AnimatedLogo fillAnimation={true}>
          <g>
            <path
              d="M61.24 68H44.824L17.368 26.432V68H0.951996V0.608002H17.368L44.824 42.368V0.608002H61.24V68Z"
              stroke="#FDFDFD"
              strokeWidth={strokeSize}
            />
            <path
              d="M89.2675 0.608002V40.928C89.2675 44.96 90.2595 48.064 92.2435 50.24C94.2275 52.416 97.1395 53.504 100.979 53.504C104.819 53.504 107.763 52.416 109.811 50.24C111.859 48.064 112.883 44.96 112.883 40.928V0.608002H129.299V40.832C129.299 46.848 128.019 51.936 125.459 56.096C122.899 60.256 119.443 63.392 115.091 65.504C110.803 67.616 106.003 68.672 100.691 68.672C95.3795 68.672 90.6115 67.648 86.3875 65.6C82.2275 63.488 78.9315 60.352 76.4995 56.192C74.0675 51.968 72.8515 46.848 72.8515 40.832V0.608002H89.2675Z"
              stroke="#FDFDFD"
              strokeWidth={strokeSize}
            />
            <path
              d="M179.899 68L157.243 38.24V68H140.827V0.608002H157.243V30.176L179.707 0.608002H199.003L172.891 33.632L199.963 68H179.899Z"
              stroke="#FDFDFD"
              strokeWidth={strokeSize}
            />
            <path
              d="M265.557 0.608002L242.229 45.728V68H225.812V45.728L202.484 0.608002H221.109L234.165 28.832L247.124 0.608002H265.557Z"
              stroke="#FDFDFD"
              strokeWidth={strokeSize}
            />
          </g>
        </AnimatedLogo>
        <g>
          <rect
            x={strokeSize / 2}
            y={strokeSize / 2}
            width={266 - strokeSize}
            height={69 - strokeSize}
            stroke="#FDFDFD"
            strokeWidth={strokeSize}
          />
        </g>
      </svg>
      <AnimatedLogo fillAnimation={true}>
        <svg
          width="250"
          height="200"
          viewBox="0 0 500 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="100"
            height="100"
            stroke="green"
            strokeWidth={strokeSize}
          />
          <ellipse
            cx="250"
            cy="100"
            rx="25"
            ry="50"
            stroke="red"
            strokeWidth={strokeSize}
          />
          <circle
            cx="400"
            cy="100"
            r="25"
            stroke="yellow"
            strokeWidth={strokeSize}
          />
        </svg>
      </AnimatedLogo>

      <AnimatedLogo duration={2.5} pathLength="1050" fillAnimation={true}>
        <svg width="250" viewBox="0 0 229 299" fill="none">
          <path
            d="M224.409,84.342l2.447,0l1.667,19.867l-4.114,0l0,62.442l-111.009,131.731l-109.66,-128.2l0,-23.615l-3.74,0l1.532,-20.617l2.208,-0.425l0,-21.316l0,-19.867l0,-52.718l0,-24.127c0,0 98.423,70.097 98.423,70.097l102.423,-65.012l0,-0.004l19.823,-12.578c0,0 0,84.342 0,84.342Zm-19.823,62.225l-180.649,0l0,16.118l89.463,104.584l91.186,-107.347l0,-13.355Zm0,-38.455l-94.006,17.838l94.006,0l0,-17.838Zm-90.01,-3.903l-90.639,0l0,17.432l90.639,-17.432Zm-90.639,-57.69l0,37.823l51.287,0l-51.287,-37.823Zm107.873,37.823l72.776,0l0,-48.77l-72.776,48.77Z"
            stroke="#E35100"
            fill="rgb(227,81,0)"
            strokeWidth={2}
          />
        </svg>
      </AnimatedLogo>
    </div>
  );
}

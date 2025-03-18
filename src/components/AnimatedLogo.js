import React from "react";

export default function Svg({
  pathLength = null,
  children,
  duration = 2,
  fillAnimation = false
}) {
  const { children: chldr, ...props } = children.props;
  if (!children) return null;
  else if (children.type === "svg")
    return (
      <svg {...props} fill="none">
        {chldr &&
          (chldr.constructor.name === "Array" ? (
            chldr.map((child, i) => {
              return (
                <Path
                  pathLength={pathLength}
                  duration={duration}
                  key={i}
                  child={child}
                  id={i}
                  arrLength={chldr.length}
                  fillAnimation={fillAnimation}
                />
              );
            })
          ) : (
            <Path
              pathLength={pathLength}
              duration={duration}
              child={chldr}
              id={0}
              arrLength={1}
              fillAnimation={fillAnimation}
            />
          ))}
      </svg>
    );
  else if (children.type === "g")
    return (
      <g {...props}>
        {chldr &&
          (chldr.constructor.name === "Array" ? (
            chldr.map((child, i) => {
              return (
                <Path
                  pathLength={pathLength}
                  key={i}
                  child={child}
                  id={i}
                  duration={duration}
                  arrLength={chldr.length}
                  fillAnimation={fillAnimation}
                />
              );
            })
          ) : (
            <Path
              pathLength={pathLength}
              duration={duration}
              child={chldr}
              id={0}
              arrLength={1}
              fillAnimation={fillAnimation}
            />
          ))}
      </g>
    );
}

function Path({ pathLength, duration, child, arrLength, id, fillAnimation }) {
  const { stroke, strokeWidth, fill = null, ...props } = child.props;
  const type = child.type;
  const pathRef = React.createRef();
  const [totalLength, setTotalLength] = React.useState(0);
  //const [animation, setAnimation] = React.useState({});
  const [path, setPath] = React.useState("");

  React.useEffect(() => {
    if (type !== "g") {
      const length =
        pathLength > 0
          ? pathLength
          : Math.ceil(pathRef.current.getTotalLength());
      // console.log(length);
      setTotalLength(length);
    }
  }, [pathRef, type, pathLength]);

  React.useEffect(() => {
    if (type === "g") return;
    let x, y, x1, y1, x2, y2, cx, cy, r, rx, ry, width, height, points;

    switch (type) {
      case "rect":
        x = parseFloat(props.x);
        y = parseFloat(props.y);
        width = parseFloat(props.width);
        height = parseFloat(props.height);
        const Xw = x + width,
          Yh = y + height;
        setPath(`M${x},${y} L${Xw},${y} L${Xw},${Yh} L${x},${Yh} Z`);
        break;

      case "line":
        x1 = parseFloat(props.x1);
        y1 = parseFloat(props.y1);
        x2 = parseFloat(props.x2);
        y2 = parseFloat(props.y2);
        setPath(`M${x1},${y1} ${x2},${y2}`);
        break;
      case "circle":
        cx = parseFloat(props.cx);
        cy = parseFloat(props.cy);
        r = parseFloat(props.r);
        const r2 = r * 2;
        setPath(
          `M${cx}, ${cy} m${-r}, 0 a ${r}, ${r} 0 1,0 ${r2},0 a ${r}, ${r} 0 1,0 ${-r2},0 Z`
        );
        break;
      case "ellipse":
        cx = parseFloat(props.cx);
        cy = parseFloat(props.cy);
        rx = parseFloat(props.rx);
        ry = parseFloat(props.ry);
        const rx2 = rx * 2;
        setPath(
          `M${cx}, ${cy} m${-rx}, 0 a ${rx}, ${ry} 0 1,0 ${rx2},0 a ${rx}, ${ry} 0 1,0 ${-rx2},0`
        );
        break;

      case "polygon":
        points = props.points;
        const polyPoints = points.split(/[ ,]+/);
        const endPoint = polyPoints[0] + ", " + polyPoints[1];
        setPath(`M${points} ${endPoint}`);
        break;

      case "polyline":
        points = props.points;
        setPath("M" + points);
        break;
      case "path":
        setPath(props.d);
        break;

      default:
        setPath("");
    }
  }, [type, props, stroke, strokeWidth, id]);

  if (type !== "g")
    return (
      <path
        ref={pathRef}
        d={path}
        stroke={totalLength > 1 ? stroke : "none"}
        strokeWidth={totalLength > 1 ? strokeWidth : "none"}
        strokeDasharray={totalLength + "px"}
        strokeDashoffset={totalLength + "px"}
      >
        {totalLength && (
          <>
            <animate
              attributeName="stroke-dashoffset"
              attributeType="CSS"
              from={totalLength + "px"}
              to="0px"
              begin={`${1 + id * 0.3}s`}
              dur={parseFloat(duration) + "s"}
              id={`svgLogo-node-1--path-${id}`}
              fill="freeze"
            />
            {fillAnimation && (
              <>
                <animate
                  attributeName="fill"
                  attributeType="CSS"
                  from={"transparent"}
                  to={fill ? fill : stroke}
                  dur="0.3s"
                  begin={`${parseFloat(duration) + 0.5 + arrLength * 0.3}s`}
                  fill="freeze"
                />
                <animate
                  attributeName="stroke"
                  attributeType="CSS"
                  from={stroke}
                  to="transparent"
                  dur="0.3s"
                  begin={`${parseFloat(duration) + 0.5 + arrLength * 0.3}s`}
                  fill="freeze"
                />
              </>
            )}
          </>
        )}
      </path>
    );
  else
    return (
      <Svg
        pathLength={pathLength}
        duration={duration}
        fillAnimation={fillAnimation}
      >
        {child}
      </Svg>
    );
}

import React from "react";
import "./library.css";
import { useSpring, animated } from "react-spring";

export default function Library() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
    duration: 1200,
  });

  return (
    <animated.div style={props}>
      <h2 id="tech-header">Tech Stack</h2>
      <div className="library-grid">
        <div className="library-item" id="javascript">
          <h3>Javascript</h3>
        </div>

        <div className="library-item" id="react">
          <h3>React JS</h3>
        </div>

        <div className="library-item" id="spring">
          <h3>Spring Animations</h3>
        </div>

        <div className="library-item" id="material">
          <h3>Material UI</h3>
        </div>
      </div>
    </animated.div>
  );
}

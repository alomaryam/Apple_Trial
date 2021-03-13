import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./Slideshow.css";
import Pictures from "./Pictures.js";

const delay = 1000;

const Slide = styled.img`
  display: inline-block;
  margin-top: 50px;
  width: 250px;
  height: 36vw;
`;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Pictures.length ? prevIndex : prevIndex + 1
        ),

      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 10}%, 0,0)`,
        }}
      >
        {Pictures.map((pictures, index) => (
          <Slide key={index} src={pictures.image} alt="image" />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

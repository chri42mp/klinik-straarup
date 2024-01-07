import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import LeftRight from "../assets/icons/LeftRight";

import "./CompareSlider.scss";
import React, { useState, useEffect, useRef, useCallback } from "react";

const CompareSlider = ({ topImage, bottomImage }) => {
  const [isResizing, setIsResizing] = useState(false);
  const topImageRef = useRef();
  const handleRef = useRef();

  const setPositioning = useCallback((x) => {
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    if (x >= left && x <= width + left - handleWidth) {
      handleRef.current.style.left = `${((x - left) / width) * 100}%`;
      topImageRef.current.style.clipPath = `inset(0 ${
        100 - ((x - left) / width) * 100
      }% 0 0)`;
    }
  }, []);

  const handleResize = useCallback(
    (e) => {
      if (e.clientX) {
        setPositioning(e.clientX);
      } else if (e.touches[0] && e.touches[0].clientX) {
        setPositioning(e.touches[0].clientX);
      }
    },
    [setPositioning]
  );

  const onKeyDown = useCallback(
    (e) => {
      const { offsetLeft, offsetParent } = handleRef.current;

      if (e.code === "ArrowLeft") {
        setPositioning(offsetLeft + offsetParent.offsetLeft - 10);
      }

      if (e.code === "ArrowRight") {
        setPositioning(offsetLeft + offsetParent.offsetLeft + 10);
      }
    },
    [setPositioning]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    setPositioning(width / 2 + left - handleWidth / 2);
  }, [setPositioning]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("touchmove", handleResize);
    window.removeEventListener("mouseup", handleResizeEnd);
    window.removeEventListener("touchend", handleResizeEnd);
  }, [handleResize]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleResize);
      window.addEventListener("touchmove", handleResize);
      window.addEventListener("mouseup", handleResizeEnd);
      window.addEventListener("touchend", handleResizeEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("touchmove", handleResize);
      window.removeEventListener("mouseup", handleResizeEnd);
      window.removeEventListener("touchend", handleResizeEnd);
    };
  }, [isResizing, handleResize, handleResizeEnd]);

  return (
    <div className="compare-slider">
      <div
        ref={handleRef}
        className="handle"
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
      >
        <LeftRight />
      </div>
      <div ref={topImageRef} className="compare-item top">
        <img draggable="false" src={topImage.src} alt={topImage.alt} />
      </div>
      <div className="compare-item">
        <img draggable="false" src={bottomImage.src} alt={bottomImage.alt} />
      </div>
    </div>
  );
};

export default CompareSlider;

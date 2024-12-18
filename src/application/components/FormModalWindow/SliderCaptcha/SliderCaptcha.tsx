import React, { useEffect, useRef, useState } from "react";
import styles from "./SliderCaptcha.module.scss";
import { PUBLIC_IMAGE } from "../../../constants";

interface SliderCaptchaProps {
  onSuccess: () => void;
  onFailure: () => void;
}

const SliderCaptcha: React.FC<SliderCaptchaProps> = ({
  onSuccess,
  onFailure,
}) => {
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [status, setStatus] = useState<"default" | "success" | "error">(
    "default"
  );
  const sliderRef = useRef<HTMLDivElement>(null);

  const correctPosition = 200;
  const tolerance = 50;

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
    setStatus("default");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      let newX = e.clientX - startX;
      newX = Math.max(0, Math.min(newX, rect.width - 40));
      setOffsetX(newX);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    if (Math.abs(offsetX - correctPosition) <= tolerance) {
      setStatus("success");
      onSuccess();
    } else {
      setStatus("error");
      onFailure();
      setOffsetX(0);
    }
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => setDragging(false);
    window.addEventListener("mouseup", handleMouseUpGlobal);
    return () => window.removeEventListener("mouseup", handleMouseUpGlobal);
  }, []);

  return (
    <div className={styles.slider__container}>
      <div className={styles.slider__captcha}>
        <div className={styles.slider__background}>
          <img
            src={PUBLIC_IMAGE + "backgroundImageSlider.svg"}
            alt="Background"
          />
        </div>

        <div className={styles.slider__puzzle} style={{ left: `${offsetX}px` }}>
          <img src={PUBLIC_IMAGE + "puzzlePieceImage.svg"} alt="Puzzle Piece" />
        </div>
      </div>

      <div
        className={styles.slider__track}
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <span className={styles.slider__text}>
          Slide to complete the puzzle
        </span>
        <div
          className={`${styles.slider__button} ${
            styles[`slider__button--${status}`]
          }`}
          style={{ left: `${offsetX}px` }}
          onMouseDown={handleMouseDown}
        >
          {status === "default" && (
            <img src={PUBLIC_IMAGE + "capchaArrow.svg"} alt="Arrow" />
          )}
          {status === "success" && (
            <img src={PUBLIC_IMAGE + "capchaDone.svg"} alt="Success" />
          )}
          {status === "error" && (
            <img src={PUBLIC_IMAGE + "capchaDisable.svg"} alt="Error" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderCaptcha;

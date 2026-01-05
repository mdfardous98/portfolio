"use client";
import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const TypingEffect = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = "",
}: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentText === currentFullText) {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentText === "") {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          // Continue typing or deleting
          setCurrentText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentFullText.slice(0, prev.length + 1)
          );
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    speed,
    deleteSpeed,
    pauseTime,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span
        className={`inline-block w-0.5 h-8 bg-current ml-1 ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      />
    </span>
  );
};

export default TypingEffect;

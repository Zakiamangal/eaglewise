"use client";

import { useState, useEffect, useCallback } from "react";

const videos = [
  "/videos/showcase/005.mp4",
  "/videos/showcase/product-reel.mp4",
  "/videos/showcase/006.mp4",
  "/videos/showcase/011.mp4",
  "/videos/showcase/0056.mp4",
  "/videos/showcase/oud-intense.mp4",
  "/videos/showcase/reel-04.mp4",
  "/videos/showcase/vid-20251218.mp4",
  "/videos/showcase/vitamin-c.mp4",
  "/videos/showcase/wicked-noir.mp4",
];

export default function VideoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goNext = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % videos.length);
      setVisible(true);
    }, 500);
  }, []);

  useEffect(() => {
    const id = setTimeout(goNext, 10000);
    return () => clearTimeout(id);
  }, [current, goNext]);

  return (
    <div
      style={{
        perspective: "1000px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "56rem",
          borderRadius: "1rem",
          overflow: "hidden",
          background: "#000",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          transform: visible
            ? "rotateY(0deg) scale(1)"
            : "rotateY(3deg) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.5s ease, opacity 0.5s ease",
        }}
      >
        <video
          key={current}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            aspectRatio: "16/9",
            display: "block",
            background: "#000",
          }}
        >
          <source src={videos[current]} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

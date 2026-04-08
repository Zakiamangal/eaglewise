"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % videos.length);
      setIsTransitioning(false);
    }, 500);
  }, []);

  /* Auto‑advance every 10 s */
  useEffect(() => {
    timerRef.current = setTimeout(goNext, 10000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, goNext]);

  /* Play the video as soon as it loads */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [current]);

  return (
    <div
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "56rem",
          borderRadius: "1.25rem",
          overflow: "hidden",
          background: "#000",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.45), 0 0 30px rgba(201,135,59,0.06)",
          transform: isTransitioning
            ? "rotateY(2deg) rotateX(1deg) scale(0.98)"
            : "rotateY(0deg) rotateX(0deg) scale(1)",
          opacity: isTransitioning ? 0 : 1,
          transition:
            "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
          transformStyle: "preserve-3d" as const,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            width: "100%",
            aspectRatio: "16/9",
            display: "block",
            objectFit: "cover",
            background: "#000",
          }}
        >
          <source src={videos[current]} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

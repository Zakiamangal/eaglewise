"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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
  const [next, setNext] = useState(1);
  const [showFront, setShowFront] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frontRef = useRef<HTMLVideoElement>(null);
  const backRef = useRef<HTMLVideoElement>(null);

  const advance = useCallback(() => {
    /* Flip layers: the back (preloaded) becomes visible, the front hides */
    setShowFront((f) => !f);

    /* After the CSS transition finishes, update the hidden layer to preload
       the NEXT video so it's ready for the following transition */
    setTimeout(() => {
      const upcoming = (next + 1) % videos.length;
      setCurrent(next);
      setNext(upcoming);
    }, 800);
  }, [next]);

  /* Schedule next advance */
  useEffect(() => {
    timerRef.current = setTimeout(advance, 20000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, advance]);

  const sharedStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    background: "#000",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };

  return (
    <div style={{ perspective: "1000px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "56rem",
          aspectRatio: "16/9",
          borderRadius: "1rem",
          overflow: "hidden",
          background: "#000",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
        }}
      >
        {/* Layer A */}
        <video
          ref={frontRef}
          key={"a-" + current}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            ...sharedStyle,
            opacity: showFront ? 1 : 0,
            transform: showFront ? "scale(1) rotateY(0deg)" : "scale(0.97) rotateY(3deg)",
            zIndex: showFront ? 2 : 1,
          }}
        >
          <source src={videos[current]} type="video/mp4" />
        </video>

        {/* Layer B — preloaded next video */}
        <video
          ref={backRef}
          key={"b-" + next}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            ...sharedStyle,
            opacity: showFront ? 0 : 1,
            transform: showFront ? "scale(0.97) rotateY(-3deg)" : "scale(1) rotateY(0deg)",
            zIndex: showFront ? 1 : 2,
          }}
        >
          <source src={videos[next]} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

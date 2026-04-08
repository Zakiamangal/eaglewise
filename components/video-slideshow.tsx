"use client";

import { useState, useRef } from "react";

export default function VideoSlideshow() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "28rem",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,135,59,0.1)",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            display: "block",
          }}
        >
          <source src="/videos/showcase-all.mp4" type="video/mp4" />
        </video>

        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "none",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            fontSize: "1.1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          {muted ? "\u{1F507}" : "\u{1F50A}"}
        </button>
      </div>
    </div>
  );
}

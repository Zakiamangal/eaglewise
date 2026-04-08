"use client";

export default function VideoSlideshow() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "28rem",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,135,59,0.1)",
        }}
      >
        <video
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
      </div>
    </div>
  );
}

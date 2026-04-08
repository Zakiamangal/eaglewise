"use client";

export default function VideoSlideshow() {
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
          transform: "rotateX(1deg)",
          transformStyle: "preserve-3d",
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
            aspectRatio: "16/9",
            display: "block",
            background: "#000",
          }}
        >
          <source src="/videos/showcase-all.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

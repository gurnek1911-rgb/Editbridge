"use client";

export default function Home() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
      color: "white",
      minHeight: "100vh"
    }}>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
        padding: "20px"
      }}>
        
        <h1 style={{
          fontSize: "48px",
          background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}>
          Find Creative Editors
        </h1>

        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Discover talented editors and bring your vision to life.
        </p>

      </div>

      {/* Stats */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        paddingBottom: "40px"
      }}>
        <div>100+ Editors</div>
        <div>500+ Projects</div>
        <div>4.9 Rating</div>
      </div>

    </div>
  );
}
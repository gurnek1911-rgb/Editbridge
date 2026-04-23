export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(10px)",
      color: "white"
    }}>
      <h2>EditBridge</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/editors">Editors</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
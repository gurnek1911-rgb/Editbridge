import Navbar from "../components/Navbar";

export const metadata = {
  title: "EditBridge",
  description: "Creative Editing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: "#0f0f0f",
        color: "white",
        fontFamily: "sans-serif"
      }}>
        
        <Navbar />

        {children}

      </body>
    </html>
  );
}
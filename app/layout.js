export const metadata = {
  title: "EditBridge",
  description: "My app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
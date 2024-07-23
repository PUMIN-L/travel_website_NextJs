
import Header from "./_components/header";
import Navbar from "./_components/navbar";
import "./globals.css";

export const metadata = {
  title: "Travel Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}

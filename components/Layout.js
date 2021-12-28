import Footer from "./footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-full">{children}</main>
      <Footer />
    </>
  );
}

import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="min-h-full">{children}</main>
      <Footer />
    </>
  );
}

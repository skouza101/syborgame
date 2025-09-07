import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-zinc-100 font-sans antialiased">
      <Header />
      <main className={`flex-1 flex flex-col container-responsive section-spacing responsive-gap ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
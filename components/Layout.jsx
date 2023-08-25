import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <Header />
        {children}
      </div>
      <div id="footer" className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Layout;

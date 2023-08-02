import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
    <Footer></Footer>
  </>
);

export default Layout;

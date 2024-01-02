import Image from "next/image";
import Nav from "./nav";
import Footer from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
    <SpeedInsights />
    <Footer></Footer>
  </>
);

export default Layout;

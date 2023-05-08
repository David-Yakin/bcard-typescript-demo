import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

type LayoutProp = {
  children: JSX.Element[] | JSX.Element;
};

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

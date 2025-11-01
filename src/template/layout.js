import React from "react";
import { Navbar } from "@components/index";

const Layout = ({ component: Component }) => {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
};

export default Layout;

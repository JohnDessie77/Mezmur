import React from "react";
import Header from "../shared/header/header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-4">{children}</div>
    </>
  );
};

export default Layout;

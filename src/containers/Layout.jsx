import React from "react";
import { Header } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};

export { Layout };

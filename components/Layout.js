import React from "react";
import Head from "next/head";

import Header from "../components/Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head></Head>
      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;

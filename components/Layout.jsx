// components/Layout.jsx
import { useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "Lumora Ventures",
  description = "Digital and Automation Solutions for Business Growth",
}) => {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Main content with padding for header */}
        <main className="flex-grow pt-16">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;

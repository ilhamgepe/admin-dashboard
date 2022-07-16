import Head from "next/head";
import React, { useEffect, useState } from "react";
import useDarkMode from "../src/store/darkModeStore";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layouts = ({ children }) => {
  const [dm, setDm] = useState("");
  const darkMode = useDarkMode((state) => state.darkMode);

  useEffect(() => {
    setDm(darkMode);
  }, [darkMode]);
  return (
    <div className={`flex ${dm == "dark" && "dark"}`}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Sidebar />
      <div className="flex-1 dark:bg-slate-900">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layouts;

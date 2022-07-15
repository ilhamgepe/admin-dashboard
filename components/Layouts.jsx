import Head from "next/head";
import React from "react";
import { useDarkMode } from "../src/store/darkModeStore";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layouts = ({ children }) => {
  const { darkMode, changeDarkMode } = useDarkMode();
  return (
    <div className={`flex ${darkMode && "dark"}`}>
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

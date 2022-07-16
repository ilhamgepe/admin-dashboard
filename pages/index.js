import Head from "next/head";
import Layouts from "../components/Layouts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDarkMode } from "../src/store/darkModeStore";

export default function Home() {

  return (
    <Layouts>
      <p>hello world</p>
    </Layouts>
  );
}

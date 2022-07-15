import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useColorMode } from "../src/store/colorMode";
import { useDarkMode } from "../src/store/darkModeStore";
import ToggleDarkMode from "./ToggleDarkMode";

const Sidebar = () => {
  // const { colorMode, changeColorMode } = useColorMode();
  // const [color, setColor] = useState("text-green-500");
  // useEffect(() => {
  //   setColor(`text${colorMode}`);
  // }, [colorMode]);
  // console.log(color);
  return (
    <div className="border-r-[0.5px] dark:bg-slate-900 dark:border-gray-600  border-solid border-gray-200 min-h-screen bg-white w-60">
      <div className="h-14 flex items-center justify-center ">
        <span className="text-xl font-bold text-purple-500">lamadmin</span>
      </div>
      <hr className="h-0 border-b-[0.5px] border-solid border-gray-200 dark:bg-slate-900 dark:border-gray-600 " />
      <div className="centersss pl-[10px]">
        <ul className="">
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
            MAIN
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <DashboardIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Dashboard</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
            MAIN
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <PersonOutlineOutlinedIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">User</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
            LIST
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <StoreMallDirectoryIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Products</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <LocalGroceryStoreIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Orders</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
            USEFULL
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <AutoGraphIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">stats</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <NotificationsActiveOutlinedIcon
              className={`text-lg text-green-500`}
            />
            <span className="text-title-sidebar">Notifications</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
            SERVICE
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <SpaOutlinedIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Sysytem Health</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <HubOutlinedIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Logs</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
            USER
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <SettingsOutlinedIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Settings</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <AccountCircleOutlinedIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Profile</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <DashboardIcon className={`text-lg text-green-500`} />
            <span className="text-title-sidebar">Logout</span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
          THEME COLOR
        </p>
        <div className="bottomss flex items-center gap-2 ml-1">
          <div
            onClick={() => changeColorMode("-purple-500")}
            className={`colorOption bg-purple-500`}
          ></div>
          <div
            onClick={() => changeColorMode("-emerald-500")}
            className={`colorOption bg-emerald-500`}
          ></div>
          <div
            onClick={() => changeColorMode("-indigo-500")}
            className={`colorOption bg-indigo-500`}
          ></div>
          <div
            onClick={() => changeColorMode("-rose-500")}
            className={`colorOption bg-rose-500`}
          ></div>
        </div>
        <div className="">
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1 dark:text-slate-50">
            DARK MODE
          </p>
          <div className="ml-1">
            <ToggleDarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

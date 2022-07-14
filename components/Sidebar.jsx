import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div className="border-r-[0.5px] border-solid border-gray-200 min-h-screen bg-white w-60">
      <div className="h-14 flex items-center justify-center ">
        <span className="text-xl font-bold text-purple-500">lamadmin</span>
      </div>
      <hr className="h-0 border-b-[0.5px] border-solid border-gray-200" />
      <div className="centersss pl-[10px]">
        <ul className="">
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1">MAIN</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <DashboardIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">Dashboard</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1">MAIN</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <PersonOutlineOutlinedIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">User</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1">LIST</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <StoreMallDirectoryIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">Products</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <LocalGroceryStoreIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">Orders</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1">USEFULL</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <AutoGraphIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">stats</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <NotificationsActiveOutlinedIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">
              Notifications
            </span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1">SERVICE</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <SpaOutlinedIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">
              Sysytem Health
            </span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <HubOutlinedIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">Logs</span>
          </li>
          <p className="text-xs text-gray-500 font-bold mt-4 mb-1">USER</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <SettingsOutlinedIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">Settings</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <AccountCircleOutlinedIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">Profile</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-purple-500/10">
            <DashboardIcon className="text-lg text-purple-500" />
            <span className="text-sm font-semibold ml-[10px]">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottomssss">color options</div>
    </div>
  );
};

export default Sidebar;

import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import * as React from "react";
import { useDarkMode } from "../src/store/darkModeStore";

export default function ToggleDarkMode() {
  const { darkMode, changeDarkMode } = useDarkMode();

  return (
    <ToggleButtonGroup value={darkMode} exclusive aria-label="text alignment">
      <ToggleButton
        className="dark:border-gray-400 rounded-tl-md rounded-bl-md"
        size="small"
        value={true}
        aria-label="darkMode"
        onClick={() => changeDarkMode(true)}
      >
        <DarkModeIcon className={`${darkMode ? "text-indigo-300" : ""}`} />
      </ToggleButton>
      <ToggleButton
        className="dark:border-gray-400 rounded-tr-md rounded-br-md"
        onClick={() => changeDarkMode(false)}
        size="small"
        value={false}
        aria-label="Light"
      >
        <LightModeIcon
          className={`${!darkMode ? "text-yellow-300" : "text-slate-300"}`}
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

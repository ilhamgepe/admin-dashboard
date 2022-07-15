import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../src/store/darkModeStore";
import { useEffect, useState } from "react";

export default function ToggleDarkMode() {
  const { darkMode, changeDarkMode } = useDarkMode();
  const [dm, setDm] = useState(true);

  useEffect(() => {
    setDm(darkMode);
  }, [darkMode]);

  return (
    <ToggleButtonGroup value={dm} exclusive aria-label="text alignment">
      <ToggleButton
        className="dark:border-gray-400 rounded-tl-md rounded-bl-md"
        size="small"
        value={true}
        aria-label="darkMode"
        onClick={() => changeDarkMode(true)}
      >
        <DarkModeIcon className={`${dm ? "text-indigo-300" : ""}`} />
      </ToggleButton>
      <ToggleButton
        className="dark:border-gray-400 rounded-tr-md rounded-br-md"
        onClick={() => changeDarkMode(false)}
        size="small"
        value={false}
        aria-label="Light"
      >
        <LightModeIcon
          className={`${!dm ? "text-yellow-300" : "text-slate-300"}`}
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

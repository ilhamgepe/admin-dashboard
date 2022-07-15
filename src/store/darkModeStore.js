import create from "zustand";
import { persist } from "zustand/middleware";

const useDarkMode = create(
    persist(
        (set) => ({
            darkMode: true,
            changeDarkMode: (status) => set(state => ({ darkMode: status }))
        }),
        {
            name: "darkmode"
        }
    )
)


export {
    useDarkMode
};

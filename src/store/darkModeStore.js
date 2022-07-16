import create from "zustand";
import { persist } from "zustand/middleware";

const darkModeStore = (set) => ({
    darkMode: 'dark',
    changeDarkMode: (mode) => set((state) => ({ darkMode: mode }))
})

const useDarkMode = create(
    persist(darkModeStore, { name: 'darkmode' })
)


export default useDarkMode

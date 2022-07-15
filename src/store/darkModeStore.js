import create from "zustand";
import { persist } from "zustand/middleware"

const useDarkMode = create(
    persist(
        (set) => ({
            darkMode: true,
            changeDarkMode: (value) => {
                return {
                    darkMode: value
                }
            }
        }),
        {
            name: 'DarkMode'
        }
    )
)

export { useDarkMode }

// const useDarkMode = create(
//     (set) => ({
//         darkMode: true,
//         changeDarkMode: (status) => set(state => ({ darkMode: status }))
//     }),
//     {
//         name: 'dark-mode',
//     }
// )


// export {
//     useDarkMode
// };

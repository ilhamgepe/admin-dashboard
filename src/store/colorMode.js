import create from "zustand";
import { persist } from 'zustand/middleware'

{/* <div className="colorOption bg-purple-500"></div>
<div className="colorOption bg-emerald-500"></div>
<div className="colorOption bg-indigo-500"></div>
<div className="colorOption bg-rose-500"></div> */}

// const colors = [
//     {
//         name: 'purple',
//         value: 'bg-purple-500'
//     },
//     {
//         name: 'emerald',
//         value: 'bg-emerald-500'
//     },
//     {
//         name: 'indigo',
//         value: 'bg-indigo-500'
//     },
//     {
//         name: 'rose',
//         value: 'bg-rose-500'
//     },
// ]
const useColorMode = create(
    (set) => ({
        colorMode: '',
        changeColorMode: (status) => set(state => ({ colorMode: status }))
    })
)


export {
    useColorMode
}
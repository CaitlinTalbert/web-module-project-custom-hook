//import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const darkMode = (initialValue) => {                  //make sure to pass in key here, "dark mode"
    const [darkMode, setDarkMode] = useLocalStorage("dark mode", initialValue) //[x] Build a hook that ONLY setups a boolean state value. This value governs if dark mode is on or off.
    return [darkMode, setDarkMode] //[x] Return the slice of state created and the state modification function.
}

export default darkMode; 
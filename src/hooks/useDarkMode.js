import { useState } from 'react';

const darkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState(initialValue) //[x] Build a hook that ONLY setups a boolean state value. This value governs if dark mode is on or off.
    return [darkMode, setDarkMode] //[x] Return the slice of state created and the state modification function.
}

export default darkMode; 
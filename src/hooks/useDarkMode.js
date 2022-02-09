import { useState } from 'react';

export const darkMode = initialValue => {
    const [darkMode, setDarkMode] = useState(initialValue)
    return [darkMode, setDarkMode]
}
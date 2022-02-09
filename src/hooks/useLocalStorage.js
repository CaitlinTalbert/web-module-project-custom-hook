import { useState } from 'react'; 

const useLocalStorage= (key, initialValue) => { //[x] Build a hook takes in a key value and an initialValue.
    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)) { //checks to see if localStorage already has a value to be put it, if returns null means no item
            return(JSON.parse(localStorage.getItem(key)))
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return (initialValue);
        }
    }); 

    const setStoredValue = (newValue) => { //every time you set state, you set your value to local storage
        localStorage.setItem(key, JSON.stringify(newValue)); //sets item inside local storage, then sets in state
        setValue(newValue); 
    }

        return[value, setStoredValue]; 

}

    export default useLocalStorage; 
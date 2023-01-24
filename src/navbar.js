
import { useState, useEffect } from "react";

const Nav = () => {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }  else{
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);

    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    }

    return ( 
        <div className="flex p-8 justify-between drop-shadow-sm dark:border-gray-700 dark:border-b  bg-white dark:bg-slate-900 dark:text-slate-300">
          <div>
            <p className="text-md font-bold">Where in the world?</p>
          </div>
          <div>
            {/* <p>Dark mode</p> */}
            <button onClick={handleThemeSwitch}>
              Switch to dark theme
            </button>
          </div>
        </div>
     );
}
 
export default Nav;
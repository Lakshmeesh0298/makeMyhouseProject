import { createContext, useState } from "react";
export let sidebarContext = createContext();

const SideBarContext = ({ children }) => {
  let [toggle, setToggle] = useState(false);

  return (
    <sidebarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </sidebarContext.Provider>
  );
};
export default SideBarContext;

import React, { ReactNode, useState } from "react";
import { SidebarContext } from "./sidebarCreator";

export interface ContextTypes {
  sidebar: string;
  setSidebar: React.Dispatch<React.SetStateAction<string>>;
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

const Sidebarprovider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState("introduction");
  const [theme, setTheme] = useState(sessionStorage.getItem("theme"));
  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar, theme, setTheme }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default Sidebarprovider;

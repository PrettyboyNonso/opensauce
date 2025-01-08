import React, { ReactNode, useState } from "react";
import { SidebarContext } from "./sidebarCreator";

export interface ContextTypes {
  sidebar: string;
  setSidebar: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebarprovider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState("introduction");
  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default Sidebarprovider;

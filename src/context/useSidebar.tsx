import { useContext } from "react";
import { SidebarContext } from "./sidebarCreator";

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    console.log("sidebar context has been misused");
    throw new Error("An error occured, check your console for more details");
  }
  return context;
};

export default useSidebar;

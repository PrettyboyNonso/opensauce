import React from "react";
import { ContextTypes } from "./Sidebarprovider";

export const SidebarContext = React.createContext<ContextTypes | undefined>(
  undefined
);

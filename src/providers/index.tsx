import React from "react";
import { BrowserRouter } from "react-router-dom";
type Props = {
  children?: React.ReactNode | undefined;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <React.StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </React.StrictMode>
  );
};

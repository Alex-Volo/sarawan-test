import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
type Props = {
  children?: React.ReactNode | undefined;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <React.StrictMode>
        <BrowserRouter>{children}</BrowserRouter>
      </React.StrictMode>
    </ReduxProvider>
  );
};

import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { router } from "../routes";
import store from "../store";
type Props = {
  children?: React.ReactNode | undefined;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ReduxProvider>
  );
};

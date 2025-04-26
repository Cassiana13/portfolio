import { RouterProvider } from "react-router-dom";
import { router } from "./index";
import React from "react";

export default function AppRouter() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </React.StrictMode>
  );
}

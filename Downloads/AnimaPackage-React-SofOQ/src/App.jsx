import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AgencySignUp } from "./screens/AgencySignUp";
import { StudioSignUp } from "./screens/StudioSignUp";
import { ChooseSignUp } from "./screens/ChooseSignUp";
import { CreatorSignUp } from "./screens/CreatorSignUp";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AgencySignUp />,
  },
  {
    path: "/agency-sign-up",
    element: <AgencySignUp />,
  },
  {
    path: "/studio-sign-up",
    element: <StudioSignUp />,
  },
  {
    path: "/choose-sign-up",
    element: <ChooseSignUp />,
  },
  {
    path: "/creator-sign-up",
    element: <CreatorSignUp />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ChooseSignUp } from "./screens/ChooseSignUp";
import { AgencySignUp } from "./screens/AgencySignUp";
import { StudioSignUp } from "./screens/StudioSignUp";
import { CreatorSignUp } from "./screens/CreatorSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/choose-sign-up" replace />,
  },
  {
    path: "/choose-sign-up",
    element: <ChooseSignUp />,
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
    path: "/creator-sign-up",
    element: <CreatorSignUp />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

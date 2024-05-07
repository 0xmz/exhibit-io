import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";

import PageHeader from "./components/PageHeader.tsx";
import Featured from "./routes/Featured.tsx";
import RandomPage from "./routes/RandomPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ResponsiveAppBar />
        <PageHeader title="Featured" />
        <Featured ids="27992,28560,22221" />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "random",
    element: (
      <>
        <ResponsiveAppBar />
        <PageHeader title="Random" />
        <RandomPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

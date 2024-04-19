import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import App from "./App";
import "./index.css";
import { Protect } from "./routers/Routes.Protect.tsx";
import { AuthProv } from "./auth/AuthProvided.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/",
    element: <Protect />,
    children: [
      {
        path: "/app/*",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProv>
      <RouterProvider router={router} />
    </AuthProv>
  </React.StrictMode>
);

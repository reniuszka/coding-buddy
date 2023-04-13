import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
// import List from "./routes/List";
import AddUser from "./routes/AddUser";
import RootLayout from "./routes/RootLayout";
import MyErrorElement from "./routes/Error";
import { UsersContextProvider } from "./context/UsersContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <MyErrorElement />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <h2>About</h2>,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UsersContextProvider>
      <RouterProvider router={router} />
    </UsersContextProvider>
    {/* <App /> */}
  </React.StrictMode>
);

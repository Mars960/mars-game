import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import TypeGame from "./components/TypeGame";
import QuetionGame from './components/QuetionGame'

const router = createBrowserRouter([
  {
    path: "/typing-game",
    element: <TypeGame/>,
  },
  {
    path: "/quiz-game",
    element: <QuetionGame/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./style/index.css";
import Home from "./routes/Home";
import Workout from "./routes/Workout";
import Progress from "./routes/Progress";
import WorkoutPlan from "./routes/WorkoutPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/workout",
    element: <Workout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/progress",
    element: <Progress />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/workoutplan",
    element: <WorkoutPlan />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

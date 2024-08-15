import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddJob,
  Admin,
  AllJob,
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
  EditJob,
} from "./pages";

//action
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";
import { action as actionEditJob } from "./pages/EditJob";
import { action as actionDeleteJob } from "./pages/DeleteJob";
//loader
import { loader as loaderDashboard } from "./pages/DashboardLayout";
import { loader as loaderAllJobs } from "./pages/AllJobs";
import { loader as loaderEditJob } from "./pages/EditJob";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark-theme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
// const isDarkThemeEnabled = checkDefaultTheme()
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <h1>about page</h1>,
      },

      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        loader: loaderDashboard,
        children: [
          {
            index: true,
            action: addJobAction,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            loader: loaderAllJobs,
            element: <AllJob />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "edit-job/:id",
            loader: loaderEditJob,
            action: actionEditJob,
            element: <EditJob />,
          },
          {
            path: "delete-job/:id",
            action: actionDeleteJob,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";
import { HomePage } from "../pages/HomePage";
import { PoemDetail } from "../pages/PoemDetail";
import { LoginPage } from "../pages/LoginPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/home",
      element:  <HomePage /> ,
    },
    {
      path: "/poem/:id",
      element: <PoemDetail /> ,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

 export const AppRoutes = () => {
    return <RouterProvider router={router} />;
  };
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    //   children: [
    //     {
    //       path: "contacts/:contactId",
    //       element: <Contact />,
    //     },
    //   ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

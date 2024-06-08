import "./index.scss";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import Homepage from "./routes/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ProfilePage from "./routes/profilePage/ProfilePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

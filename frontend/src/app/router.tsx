import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../shared/layout/Layout";
import { HomePage } from "../features/catalog/pages/HomePage";
import { ComingSoonPage } from "../shared/pages/ComingSoonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <ComingSoonPage /> },
    ],
  },
]);
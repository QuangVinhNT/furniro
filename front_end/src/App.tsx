import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Shop, User } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <User />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

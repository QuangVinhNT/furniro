import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, User } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <User />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

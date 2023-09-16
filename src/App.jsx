import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./components/Layout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App

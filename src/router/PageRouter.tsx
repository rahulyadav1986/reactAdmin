
import { RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import RoutePage from './RouteAssign'


const router = createBrowserRouter(
  createRoutesFromChildren(
    RoutePage()
  )
)

const PageRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
}

export default PageRouter
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loginpage from './pages/login'
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPage></ErrorPage>
    
  },
  {
    path: '/login',
    element: <Loginpage></Loginpage>
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)

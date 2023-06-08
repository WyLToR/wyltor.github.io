import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import Layout from './Layout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/aboutme",
        element: <>About Me</>
      },
      {
        path: "/contact",
        element: <>Contact</>
      },
      {
        path: "/cv",
        element: <>Download CV</>
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

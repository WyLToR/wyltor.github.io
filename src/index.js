import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import Layout from './Layout';
import "./Style/Animation.css"
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
import CV from './Pages/CV';
import "./Style/WelcomePart.css"
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
        element: <AboutMe />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cv",
        element: <CV />
      }
    ]
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

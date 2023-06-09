import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import Layout from './Layout';
import "./Style/Animation.css"
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
import "./Style/WelcomePart.css"
import "./Style/TabletResponsive.css"
import "./Style/PhoneResponsive.css"
import Experience from './Pages/Experience';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import TemplatesList from './components/templatesList'
import Template from './components/template'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatesList />,
  },
  {
    path: "/template/:id",
    element: <Template />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

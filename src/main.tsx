import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import templates from './data/templates.json'
import TemplatesUse from './views/templatesUse'
import Template from './components/template'
import { Box } from '@mui/material'
import { MainContainer } from './components/containers'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatesUse templates={templates} />,
  },
  {
    path: "/:id",
    element: <TemplatesUse templates={templates} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MainContainer>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </MainContainer>
)

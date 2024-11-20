import { Component, StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageTemplate } from './templates/PageTemplate.jsx'
import { Home } from './pages/Home.jsx'
import { Career } from './pages/Career.jsx'
import { Contact } from './pages/Contact.jsx'
import { Project } from './pages/Project.jsx'
import { Projects } from './pages/Projects.jsx'

import { careerLoader, projectLoader, projectsLoader } from './loaders.js'

const router = createBrowserRouter([
  {
    path: '/',
    Component: PageTemplate,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        loader: careerLoader,
        path: 'career',
        Component: Career
      },
      {
        path: 'contact',
        Component: Contact
      }
    ]
  },
  {
    path: 'projects',
    Component: PageTemplate,
    children: [
      {
        loader: projectsLoader,
        path: '',
        Component: Projects
      },
      {
        loader: projectLoader,
        path: ':project',
        Component: Project
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

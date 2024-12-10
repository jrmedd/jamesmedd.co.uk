import { Component, StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { PageTemplate } from './templates/PageTemplate.jsx'

import { careerLoader, projectLoader, projectsLoader } from './loaders.js'

const router = createBrowserRouter([
  {
    path: '/',
    Component: PageTemplate,
    children: [
      {
        index: true,
        lazy: () => import('./routes/_index.jsx')
      },
      {
        loader: careerLoader,
        path: 'career',
        lazy: () => import('./routes/career.jsx')
      },
      {
        path: 'contact',
        lazy: () => import('./routes/contact.jsx')
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
        lazy: () => import('./routes/projects.jsx')
      },
      {
        loader: projectLoader,
        path: ':project',
        lazy: () => import('./routes/projects.$project.jsx')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

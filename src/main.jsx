import { Component, StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { PageTemplate } from './templates/PageTemplate.jsx'

import { careerLoader, contactLoader, indexLoader, projectLoader, projectsLoader } from './loaders.js'

const titleHandle = { pageTitle: data =>  data.pageTitle }

const router = createBrowserRouter([
  {
    path: '/',
    Component: PageTemplate,
    children: [
      {
        index: true,
        loader: indexLoader,
        lazy: () => import('./routes/_index.jsx'),
        handle: titleHandle
      },
      {
        loader: careerLoader,
        path: 'career',
        lazy: () => import('./routes/career.jsx'),
        handle: titleHandle
      },
      {
        loader: contactLoader,
        path: 'contact',
        lazy: () => import('./routes/contact.jsx'),
        handle: titleHandle
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
        lazy: () => import('./routes/projects.jsx'),
        handle: titleHandle
      },
      {
        loader: projectLoader,
        path: ':project',
        lazy: () => import('./routes/projects.$project.jsx'),
        handle: titleHandle
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

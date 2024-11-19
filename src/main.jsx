import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageTemplate } from './PageTemplate.jsx'
import { Home } from './pages/Home.jsx'
import { Bloomtown } from './pages/Bloomtown.jsx'

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
        path: 'bloomtown',
        Component: Bloomtown
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

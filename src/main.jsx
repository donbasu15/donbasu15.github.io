import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import './assets/CSS/Home.css'
import './assets/CSS/Page.css'
import "./assets/CSS/Sidebar.css"
import Home from './Pages/Home.jsx'
import ProjectPage from './Pages/ProjectPage.jsx'
import NotFound from './Pages/NotFound.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    children: [
      {
        path: "/portfolio/",
        element: <Home />,
      },
      {
        path: "/portfolio/projects",
        element: <ProjectPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

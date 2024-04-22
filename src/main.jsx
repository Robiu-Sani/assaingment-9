import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import Context from './context/Context'
import './index.css'
import 'animate.css';
// import '/aos/dist/aos.css';
import route from './route/Route.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <HelmetProvider>
        <RouterProvider router={route} />
      </HelmetProvider>
    </Context>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Apps from './Pages/Apps.jsx'
import Installation from './Pages/Installation.jsx'


const router=createBrowserRouter([

  {
    path:"/",
    Component:App,
    children:[
      {
        index:true,
        Component:Home
      },
      {
    path:"/apps",
    Component:Apps,
      },
      {
    path:"/installation",
    Component: Installation ,
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

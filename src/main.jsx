import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Apps from './Pages/Apps.jsx'
import Installation from './Pages/Installation.jsx'
import AppDetails from './Component/AppDetails.jsx'
import NotFoundApp from './Component/NotFoundApp.jsx'
import PageNotFound from './Component/PageNotFound.jsx'
import Loading from './Component/Loading.jsx'


const router=createBrowserRouter([

  {
    path:"/",
    Component:App,
      HydrateFallback: () => {
      return <Loading></Loading>;
    },
    children:[
      {
        index:true,
        loader: ()=>fetch("../data_8.json"),
        Component:Home
      },
      {
    path:"/apps",
    loader: ()=>fetch("../data_25.json"),
    Component:Apps,
      },
      {
    path:"/apps/:id",
    loader: ()=>fetch("../data_25.json"),
    Component:AppDetails,
      },
      {
    path:"/installation",
    Component: Installation ,
      },
        {
    path:"*",
    Component:PageNotFound,
  },
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: '/listedbooks',
        element: <ListedBooks />
      },
      {
        path: '/pagestoread',
        element: <PagesToRead />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)

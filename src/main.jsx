import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('data.json'),
      },
      {
        path: '/listedbooks',
        element: <ListedBooks />
      },
      {
        path: '/pagestoread',
        element: <PagesToRead />
      },
      {
        path: '/blog/:hi',
        element: <Blog />,
        loader: ({ params }) =>
        fetch(`data.json/${params.hi}`),
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)

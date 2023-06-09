import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import 'antd/dist/reset.css'
import './global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />,
)

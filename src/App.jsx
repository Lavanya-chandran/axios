import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import "@pallassystems/react-bootstrap-table"
import "@vlsergey/react-bootstrap-button-with-spinner"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const API_URL =  'https://jsonplaceholder.typicode.com/users';

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App
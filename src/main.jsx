import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Todo from './components/TodoLIst/Todo.jsx'
import Home from './components/home/Home.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
   <Route path="/Todo" element={<Todo/>}/>
   <Route index element={<Home></Home>}/>
  
    
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
)

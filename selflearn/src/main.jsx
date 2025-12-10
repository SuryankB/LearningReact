import React ,{StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { AuthProvider, Log } from './Context/Login.jsx'   
import Login from './components/Login/Login.jsx'
import { ThemeProvider,ThemeContext } from './Context/ThemeContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='app' element={<App />} />
      <Route path='Login' element ={<Login/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)

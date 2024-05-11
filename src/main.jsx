import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter } from 'react-router-dom';
import FlavoroStore from './Store/index.js';
import { Provider } from 'react-redux';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Clearing from './routes/Clearing.jsx';
import './index.css'
import Error404 from './routes/Error404.jsx';
const router = createBrowserRouter([
  {path:"/",element : <App />, children : [
      {path : "/", element : <Home />},
      {path : "/checkout", element : <Clearing />},
    ]
  },
  {path:"/*", element : <Error404 />}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={FlavoroStore}>
    <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>,
)

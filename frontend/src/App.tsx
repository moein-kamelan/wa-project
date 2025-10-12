
import './App.css'

import { RouterProvider } from 'react-router-dom'
import routes from './routes';
import {  ToastContainer } from 'react-toastify';



function App() {

    return (
      <>
      
      <ToastContainer stacked/>

    <RouterProvider router={routes} />
      </>
    )
  
}

export default App

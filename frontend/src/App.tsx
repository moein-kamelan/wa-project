
import './App.css'

import { RouterProvider } from 'react-router-dom'
import routes from './routes';
import {  ToastContainer } from 'react-toastify';



function App() {

    return (
      <>
      
      <ToastContainer stacked   
       position= "top-right"
    autoClose= {5000}
    customProgressBar = {false}
    
    hideProgressBar= {true}
    closeOnClick= {true}
    pauseOnHover= {false}
    draggable= {true}
    closeButton = {false}
      
      />

    <RouterProvider router={routes} />
      </>
    )
  
}

export default App

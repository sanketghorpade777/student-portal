
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route} from 'react-router-dom';
import Registeruser from './Pages/Registeruser';
import Loginuser from './Pages/Loginuser';
import Home from './Components/Home';
import {Toaster} from 'react-hot-toast';
import Logout from './Components/Logout';
import { UserContextProvider } from './context/usercontext';


function App() {

  return (
    <div className="App">

   
          <Toaster position='top-right' toastOptions={{duration: 5000}}/>
         <UserContextProvider>
          <Routes>
           <Route path='/' element={<Loginuser/>}/>
           <Route path='/register' element={<Registeruser/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/Logout' element={ <Logout/>}/>
           

          </Routes>
          </UserContextProvider>
  

    
    </div>
  );
}

export default App;

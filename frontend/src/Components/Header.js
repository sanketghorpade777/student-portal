import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginuser from './Loginuser';
import Registeruser from './Registeruser';
import Home from './Home';
import Logout from './Logout';


function Header() {
  return (
    <>
      <nav className='bg-secondary'>
        <ul className='d-flex justify-content-evenly' style={{listStyleType:'none'}}>
          {/* <BrowserRouter> */}
          <Router>
            <Routes>
            <Route path='/Loginuser' element={ <Loginuser/>} exact/>
            <Route path='/Registeruser' element={ <Registeruser/>}/>
            <Route path='/Home' element={ <Home/>}/>
            <Route path='/Logout' element={ <Logout/>}/>
          
            </Routes>
            </Router>
            {/* </BrowserRouter> */}
           
        </ul>
      </nav>
    
    </>
  )
}

export default Header
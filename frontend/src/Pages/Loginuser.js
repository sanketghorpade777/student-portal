import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';


function Loginuser() {
  
  axios.get('/');

  const navigate = useNavigate();

const [email,setEmail] = useState('');
const [password, setPassword] = useState('');

const HandleLogin = async(e) => {
  e.preventDefault();
  try{
    await axios.post('http://localhost:3000/',{
       email,password
    })
    .then(res => {
      if(res.data.msg === "Record Not Found"){
        toast.error('Record Not Found ! ');
      }else if(res.data.success === false){
      toast.error(res.data.msg);
    
      navigate('/',);
     }else{
      console.log(res.data);
      toast.success("Password Matched & Logged In Successful !");
      navigate('/home',{state:{id:email}});
     }
    })
    
  }catch(e){
    console.log(e);
  }

}





  return (
    <div>

<div className='container w-50 border border-primary rounded p-4'>
            <h1 className='p-2'>Login</h1>
            
        <form>
            <label>Email :</label>
            <input type="email" placeholder='Please Enter Your Email' className='form-control' onChange={(e) => setEmail(e.target.value)}/><br/>
            <label>Password : </label>
            <input type="password" placeholder='Please Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)}/><br/>
           
        
          
             <div className='d-flex flex-column justify-content-evenly'>
             <button type='button' onClick={HandleLogin} className='btn btn-primary'>Login</button>
             <Link to="/register"> Register Here ? </Link>
             </div>
        </form>
        </div>

    </div>
  )
}

export default Loginuser
import React,{useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';

function Registeruser() {

  const navigate = useNavigate();

const [name, setName] = useState('');
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');


 const HandleRegister = async(e) => {
  e.preventDefault();


  //check password and confirmpassword matched
  if(password == confirmpassword){

try{



  await axios.post('http://localhost:3000/register',{
     name,email,password
  })

    


  .then(res => {
    console.log("response",res.data.success);
    if(res.data.success == true){
     toast.success('! You Are Successfully Registered');
      navigate('/home',{state:{id:email}});
     }else if(res.data.success == false){
     toast.error(res.data.msg);
   
     }else if(res.data.status == 201){
      toast.error("Password So Small !");
     }
  })

}catch(e){
  console.log(e);

}

  }else{
    setConfirmPassword('');
    toast.error("Password Cannot Matched");
  }



 }

 


  return (
    <div>
        <div className='container w-50 border border-primary rounded p-5'>
            <h1>Register Here</h1>
            
        <form>
            <label>Name : </label><br/>
            <input type="text" placeholder='Please Enter Your Name' className='form-control' onChange={(e) =>setName(e.target.value)} required/><br/>
            <label>Email : </label>
            <input type="email" placeholder='Please Enter Your Email' className='form-control' onChange={(e) =>setEmail(e.target.value)} required/><br/>
            <label>Password : </label>
            <input type="password" placeholder='Please Enter Password' className='form-control' onChange={(e) =>setPassword(e.target.value)} required/><br/>
            <label> Confirm Password : </label>
            <input type="password" placeholder='Please Enter Confirm Password' className='form-control' onChange={(e) =>setConfirmPassword(e.target.value)} required/><br/>
        
            <div className='d-flex flex-column justify-content-evenly'>
             <button type='button' onClick={HandleRegister} className='btn btn-success'>Register</button>
             <Link to="/">Login Here ? </Link>
             </div>
        </form>
        </div>
    </div>
  )
}

export default Registeruser
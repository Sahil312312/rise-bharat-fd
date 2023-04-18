import './Login.css'
import Rise from '../../CompanyName/Rise'
import { useState, useContext } from 'react';
import Context from '../../../store/AuthContext';
import { toast } from 'react-hot-toast';
import { baseUrl } from '../../..';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(`${baseUrl}/v1/auth/login`, {
            phone: number,
            password: password,
          }, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          console.log(data);
          setIsAuthenticated(true);
          toast.success(`Hello ${data.data.full_name}`);
        } catch (error) {
          setIsAuthenticated(false);
          toast.error(error.response.data.message);
          console.log(error);
        }
    }
    if(isAuthenticated){
        return <Navigate to="/" />
    }
   
  return (
    <>
        <Rise/>
        <form onSubmit={submitHandler}>
            <input type="number" placeholder="Enter Phone No"  required onChange={(e)=>{setNumber(e.target.value)}}/>
            <input type="password" placeholder="Enter Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit" className="btn-1"> Login </button>
        </form>
            <Link to="/register" style={{marginLeft:175,paddingTop:30}}>Signup</Link>
    </>
  )
}

export default Login
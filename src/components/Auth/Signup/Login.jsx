import './Login.css'
import Rise from '../../CompanyName/Rise'
import { useState, useContext } from 'react';
import Context from '../../../store/AuthContext';
import { toast } from 'react-hot-toast';
import { baseUrl } from '../../..';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from "formik";
import {loginSchema} from "../../../assets/schemas/index"
const initialValues = {
  phone: "",
  password: ""
}

const Login = () => {

  const {values , errors , touched, handleChange,handleSubmit,handleBlur} = useFormik({
     initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit:  async(values,action) => {
        try {
          const { data } = await axios.post(`${baseUrl}/v1/auth/login`, values, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          setIsAuthenticated(true);
          toast.success(`Hello ${data.data.full_name}`);
        } catch (error) {
          setIsAuthenticated(false);
          toast.error(error.response.data.message);
        }
        action.resetForm();
      }

  });

    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    // const submitHandler = async(e) => {
    //     e.preventDefault();
    //     try {
    //       const { data } = await axios.post(`${baseUrl}/v1/auth/login`, {
    //         phone: number,
    //         password: password,
    //       }, {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         withCredentials: true,
    //       });
    //       setIsAuthenticated(true);
    //       toast.success(`Hello ${data.data.full_name}`);
    //     } catch (error) {
    //       setIsAuthenticated(false);
    //       toast.error(error.response.data.message);
    //     }
    // }
    
    if(isAuthenticated){
        return <Navigate to="/" />
    }
   
  return (
    <>
        <Rise/>
        <form onSubmit={handleSubmit}>
            <input type="number" name="phone" placeholder="Enter Phone No" value={values.phone} onBlur={handleBlur} onChange={handleChange}/>
            {touched.phone && <p className="form-error">{errors?.phone}</p>}
            <input type="password" name="password" placeholder="Enter Password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
            {touched.password && <p className="form-error">{errors?.password}</p>}
            <button type="submit" className="btn-1"> Login </button>
        </form>
            <Link to="/register" style={{marginLeft:175,paddingTop:30}}>Signup</Link>
    </>
  )
}

export default Login
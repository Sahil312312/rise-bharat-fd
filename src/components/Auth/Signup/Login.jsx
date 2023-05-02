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
import Loader from '../../Loader/Loader'

const initialValues = {
  phone: "",
  password: ""
}

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const {loading,setLoading} = useContext(Context)

  const {values , errors , touched, handleChange,handleSubmit,handleBlur} = useFormik({
     initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit:  async(values,action) => {
        try {
          setLoading(true);
          const { data } = await axios.post(`${baseUrl}/v1/auth/login`, values, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          setIsAuthenticated(true);
          setLoading(false);
          toast.success(`Hello ${data.data.full_name}`);
        } catch (error) {
          setIsAuthenticated(false);
          setLoading(false);
          toast.error(error.response.data.message);
        }
        action.resetForm();
      }

  });

    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');


   
    if(isAuthenticated){
        return <Navigate to="/" />
    }
   
  return (
    <>
        {loading ? <Loader/> : (
          <>
         <Rise/>
          <form onSubmit={handleSubmit}>
              <input type="number" name="phone" placeholder="Enter Phone No" value={values.phone} onBlur={handleBlur} onChange={handleChange}/>
              {touched.phone && <p className="form-error">{errors?.phone}</p>}
              <input type="password" name="password" placeholder="Enter Password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
              {touched.password && <p className="form-error">{errors?.password}</p>}
              <button type="submit" className="btn-1"> Login </button>
          </form>
          <div className="signup">
            <p className='signup-para'>Don't have an account?
              <Link to="/register" className='signup-btn'><u>Signup</u></Link>
            </p>
          </div>
        </>
        )}
    </>
  )
}

export default Login
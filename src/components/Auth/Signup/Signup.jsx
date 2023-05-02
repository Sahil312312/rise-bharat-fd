import { useContext, useState } from "react";
import Rise from "../../CompanyName/Rise";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../../index";
import Context from "../../../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {signupSchema} from "../../../assets/schemas/index"
import Loader from "../../Loader/Loader";

const initialValues = {
  full_name: "",
  phone: "",
  password: "",
  role: "Applicant",
}

const Signup = () => {
  const {loading,setLoading} = useContext(Context)
  let navigate = useNavigate();
  const {values , errors , touched, handleChange,handleSubmit,handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit:  async(values,action) => {
      try {
        setLoading(true);
        const { data } = await axios.post(
          `${baseUrl}/v1/auth/signup`, values,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setLoading(false);
        toast.success("Registered Successfully now Login to continue");
        navigate("/login ");
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.errors);
        console.log(error);
      }
      action.resetForm();
    },

  });




  

  return (
    loading ? <Loader/> : 
    <>
      <Rise />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.full_name && <p className="form-error">{errors?.full_name}</p>}
        <input
          type="number"
          name="phone"
          placeholder="Enter Phone Number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.phone && <p className="form-error">{errors?.phone}</p>}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && <p className="form-error">{errors?.password}</p>}
        <select
          name="role"
          value={values.role}
          onChange={handleChange}
        >
          <option value="Applicant" >Applicant</option>
          <option value="Recruiter" >Recruiter</option>
        </select>
        <button type="submit" className="btn-1">
         
          Signup
        </button>
      </form>
      <div className="signup">
            <p className='signup-para'>Already have an account?
              <Link to="/login" className='signup-btn'><u>Login</u></Link>
            </p>
      </div>
    </>
  );
};

export default Signup;

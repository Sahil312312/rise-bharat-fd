import { useContext, useState } from "react";
import Rise from "../../CompanyName/Rise";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../../index";
import Context from "../../../store/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {signupSchema} from "../../../assets/schemas/index"

const initialValues = {
  full_name: "",
  phone: "",
  password: "",
  role: "Applicant",
}

const Signup = () => {
  let navigate = useNavigate();
  const {values , errors , touched, handleChange,handleSubmit,handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit:  async(values,action) => {
      try {
        const { data } = await axios.post(
          `${baseUrl}/v1/auth/signup`, values,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success("Registered Successfully");
        navigate("/login ");
      } catch (error) {
        toast.error(error.response.data.errors);
        console.log(error);
      }
      action.resetForm();
    },

  });

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [role, setRole] = useState("Applicant");
  
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await axios.post(
  //       `${baseUrl}/v1/auth/signup`,
  //       {
  //         full_name: name,
  //         phone: phone,
  //         password: password,
  //         role: role,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     setName("");
  //     setPhone("");
  //     setPassword("");
  //     toast.success("Registered Successfully");
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     toast.error(error.response.data.errors);
  //     console.log(error);
  //   }
  // };

  //  if(isAuthenticated){
  //   return <Navigate to={"/login"} />
  // }
  

  

  return (
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
    </>
  );
};

export default Signup;

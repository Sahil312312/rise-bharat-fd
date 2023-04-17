import { useContext, useState } from "react";
import Rise from "../../CompanyName/Rise";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../../index";
import Context from "../../../store/AuthContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Applicant");
  
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${baseUrl}/v1/auth/signup`,
        {
          full_name: name,
          phone: phone,
          password: password,
          role: role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setName("");
      setPhone("");
      setPassword("");
      toast.success("Registered Successfully");
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.errors);
      console.log(error);
    }
  };

   if(isAuthenticated){
    return <Navigate to={"/login"} />
  }
  
  return (
    <>
      <Rise />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter Phone Number"
          required
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <select
          required
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="Applicant">Applicant</option>
          <option value="Recruiter">Recruiter</option>
        </select>
        <button type="submit" className="btn-1">
         
          Signup
        </button>
      </form>
    </>
  );
};

export default Signup;

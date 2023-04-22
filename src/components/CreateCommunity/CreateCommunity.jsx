import React, { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../index";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {createCommunitySchema} from "../../assets/schemas/index"
import Loader from "../Loader/Loader";
import Context from "../../store/AuthContext";

const initialValues = {
  name: ""
}

const CreateCommunity = () => {
  let navigate = useNavigate();
  const {loading,setLoading} = useContext(Context)

  const {values , errors , touched, handleChange,handleSubmit,handleBlur} = useFormik({
    initialValues: initialValues,
     validationSchema: createCommunitySchema,
     onSubmit:  async(values,action) => {
      setLoading(true);
      try {
        const { data } = await axios.post(`${baseUrl}/v1/community`, values, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setLoading(false);
        toast.success("Community Created");
        navigate("/")
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.errors);
      }
       action.resetForm();
     }

 });

  // const [avatar, setAvatar] = useState("");
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   const Reader = new FileReader();
  //   Reader.readAsDataURL(file);

  //   Reader.onload = () => {
  //     if (Reader.readyState === 2) {
  //       setAvatar(Reader.result);
  //     }
  //   };
  // };


  // const [groupName, setGroupName] = useState("");
 

  // const submitHandler = async(e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(`${baseUrl}/v1/community`, { name: groupName }, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     });
  //     toast.success("Community Created");
  //     console.log(data);
  //     navigate("/")
  //   } catch (error) {
  //     toast.error(error.response.data.errors);
  //   }
  // }

  return (
    loading ? <Loader/> :
    <>
      <div className="top-heading">Create New Community</div>
      <form onSubmit={handleSubmit}>
      {/* <Avatar src={avatar} alt="User"sx={{ height: "10vmax", width: "10vmax" }} /> */}
        {/* <input type="file" accept="image/*" onChange={handleImageChange} style={{marginLeft:"55px",paddingTop:"20px",paddingBottom:"10px"}}/> */}
        <input type="text" name="name" value={values.name} placeholder="Enter Group Name"  onChange={handleChange}/>
        {touched.name && <p className="form-error">{errors?.name}</p>}
        <button type="submit" className="btn-1">
          Create
        </button>
      </form>
    </>
  );
};

export default CreateCommunity;

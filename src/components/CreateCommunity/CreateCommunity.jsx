import React, { useState } from "react";
import { Avatar } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../index";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateCommunity = () => {
  
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
  const [groupName, setGroupName] = useState("");
  let navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/v1/community`, { name: groupName }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success("Community Created");
      console.log(data);
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.errors);
    }
  }
  return (
    <>
      <div className="top-heading">Create New Community</div>
      <form onSubmit={submitHandler}>
      {/* <Avatar src={avatar} alt="User"sx={{ height: "10vmax", width: "10vmax" }} /> */}
        {/* <input type="file" accept="image/*" onChange={handleImageChange} style={{marginLeft:"55px",paddingTop:"20px",paddingBottom:"10px"}}/> */}
        <input type="text" placeholder="Enter Group Name" required onChange={(e)=>{setGroupName(e.target.value)}}/>
        <button type="submit" className="btn-1">
          Create
        </button>
      </form>
    </>
  );
};

export default CreateCommunity;

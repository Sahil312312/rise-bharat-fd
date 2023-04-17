import React, { useState } from "react";
import { Avatar } from "@mui/material";

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
  return (
    <>
      <div className="top-heading">Create New Community</div>
      <form>
      {/* <Avatar src={avatar} alt="User"sx={{ height: "10vmax", width: "10vmax" }} /> */}
        {/* <input type="file" accept="image/*" onChange={handleImageChange} style={{marginLeft:"55px",paddingTop:"20px",paddingBottom:"10px"}}/> */}
        <input type="text" placeholder="Enter Group Name" />
        <button type="submit" className="btn-1">
          Create
        </button>
      </form>
    </>
  );
};

export default CreateCommunity;

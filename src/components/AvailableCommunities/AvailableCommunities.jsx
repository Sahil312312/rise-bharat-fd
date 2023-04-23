// import React from "react";
// import OneCommunity from "../Community/OneCommunity";
// import Popup from "../PopUp/Popup";

// const AvailableCommunities = () => {
//   const items=[{}];
//   return (
//     <>
//       <div className="top-heading">Available Communities</div>
//       <OneCommunity link={"Join   ➝"}/>
//       <OneCommunity link={"Join   ➝"}/>
//       <OneCommunity link={"Join   ➝"}/>
//       <Popup items={items} />
//     </>
//   );
// };

// export default AvailableCommunities;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OneCommunity from "../Community/OneCommunity";
import Popup from "../PopUp/Popup";
import {  baseUrl } from "../../index";
import axios from "axios";
import "../Community/OneCommunity.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";

const AvailableCommunities = () => {
  const [availableCommunities, setavailableCommunities] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/v1/community`, { withCredentials: true })
      .then((response) => {
        setavailableCommunities(response.data.data);
        toast.success("Available communities loaded");
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        console.log(err);
      });
  }, []);



  const logoutHandler = () => {
    console.log("logout");
  }

  const items = [{name: "Logout",onClickCreate:logoutHandler}];
  return (
    loading ? <Loader/> :
    <>
      <div className="top-heading">Available Communities</div>
      {availableCommunities.length > 0 ? (
        availableCommunities.map((community) => {
          return (
            <OneCommunity //change key
              key={community._id}
              id={community._id}
              link={"Join   ➝"}
              name={community.name}
            />
          );
        })
      ) : (
        <div className="no-community">There are no communities to join</div>
      )}

      <Popup items={items} />
    </>
  );
};

export default AvailableCommunities;

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

const AvailableCommunities = () => {
  const URL = `${baseUrl}/v1/community`;
  const navigate = useNavigate();
  const [availableCommunities, setavailableCommunities] = useState([]);

  useEffect(() => {
    axios
      .get(URL, { withCredentials: true })
      .then((response) => {
        setavailableCommunities(response.data.data);
        setTimeout(() => {
          toast.success("Available communities loaded");
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        console.log(err);
      });
  }, []);

  const back = () => {
    navigate(-1);
  };

  const items = [{}];
  return (
    <>
      <ArrowBackIcon onClick={back} />
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
        <div className="no-community">There are no companies to join</div>
      )}

      <Popup items={items} />
    </>
  );
};

export default AvailableCommunities;

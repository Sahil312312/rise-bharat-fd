import React, { useState, useEffect } from "react";
import OneCommunity from "../Community/OneCommunity";
import Popup from "../PopUp/Popup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../index";

const AllCommunities = () => {
  const URL = `${baseUrl}/v1/community/join-communities`;
  const [joinedCommunities, setjoinedCommunities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(URL, { withCredentials: true })
      .then((response) => {
        setjoinedCommunities(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const items = [
    { name: "Join a new community" },
  ];

  return (
    <>
      <div className="top-heading">Rise Communities</div>

      {joinedCommunities.length > 0 ? (
        joinedCommunities.map((community) => {
          return (
            <OneCommunity
              key={community.community._id}
              id={community.community._id}
              name={community.community.name}
              link={"View   ➝"}
            />
          );
        })
      ) : (
        <div>
          <h1>No community joined yet</h1>
        </div>
      )}

      <Popup items={items} />
    </>
  );
};

export default AllCommunities;

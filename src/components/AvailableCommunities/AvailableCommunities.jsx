import React from "react";
import OneCommunity from "../Community/OneCommunity";
import Popup from "../PopUp/Popup";

const AvailableCommunities = () => {
  const items=[{}];
  return (
    <>
      <div className="top-heading">Available Communities</div>
      <OneCommunity link={"Join   ➝"}/>
      <OneCommunity link={"Join   ➝"}/>
      <OneCommunity link={"Join   ➝"}/>
      <Popup items={items} />
    </>
  );
};

export default AvailableCommunities;

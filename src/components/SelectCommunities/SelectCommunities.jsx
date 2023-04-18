import "./SelectCommunities.css";
import EachCommunity from "./EachCommunity";
import Context from "../../store/AuthContext";
import { useContext } from "react";

const SelectCommunities = () => {
  const {mycommunities} = useContext(Context);
  const selectCommunitieHandler = (e) => {
    console.log("clicked");
  };
  return (
    <>
      <div className="top-heading">SelectCommunities</div>

      <div className="post-job">
        {mycommunities.length > 0 ? mycommunities.map((community) => {
          return (
            <EachCommunity key={community._id} name={community.name} />
          )
        }) : <div className="no-community">No Community Found</div>
        }
      </div>
      <button className="btn-1 post-job-button">Post Job</button>
    </>
  );
};

export default SelectCommunities;

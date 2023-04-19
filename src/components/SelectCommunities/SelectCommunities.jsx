import "./SelectCommunities.css";
import EachCommunity from "./EachCommunity";
import Context from "../../store/AuthContext";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../..";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const SelectCommunities = () => {
  const { jobId } = useParams();
  const {mycommunities,setMyCommunities,user} = useContext(Context);
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  let navigate = useNavigate();

  const selectCommunitieHandler = (id) => {
    if(selectedCommunities.includes(id)){
      setSelectedCommunities(selectedCommunities.filter((item) => item !== id));
    }else{
      setSelectedCommunities([...selectedCommunities,id]);
    }
  };

  
  const postJobHandler = async() => {
    try {
      console.log(selectedCommunities);
     const {data} =  await axios.post(`${baseUrl}/v1/job/share-post/${jobId}`,{
        communities: selectedCommunities
      },{
        withCredentials: true,
      });
      toast.success("Job Posted");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.errors);
      console.error(error.response.data.errors);
    }


  };

  useEffect(() => {
    
    axios.get(`${baseUrl}/v1/community/my-community`,{
      withCredentials: true
    }).then(res => {
        setMyCommunities(res.data.data);
      })
        .catch(err => {
          console.error(err.response.data.errors);
    })
  }, [])

  return (
    <>
      <div className="top-heading">SelectCommunities</div>

      <div className="post-job">
        {mycommunities.length > 0 ? mycommunities.map((community) => {
          return (
            <EachCommunity key={community._id} name={community.name} onSaveid={selectCommunitieHandler} id={community._id}/>
          )
        }) : <div className="no-community">No Community Found</div>
        }
      </div>
      <button className="btn-1 post-job-button" onClick={postJobHandler}>Post Job</button>
    </>
  );
};

export default SelectCommunities;

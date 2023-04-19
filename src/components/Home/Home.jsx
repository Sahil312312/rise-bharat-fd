import { useNavigate } from 'react-router-dom';
import Popup from '../PopUp/Popup'
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../..';
import Context from '../../store/AuthContext';
import { toast } from 'react-hot-toast';
import OneCommunity from '../Community/OneCommunity';

const Home = () => {
  const {mycommunities ,setMyCommunities} = useContext(Context);

  let navigate = useNavigate();
  useEffect(() => {
    
    axios.get(`${baseUrl}/v1/community/my-community`,{
      withCredentials: true
    }).then(res => {
        setMyCommunities(res.data.data);
      })
        .catch(err => {
          toast.error(err.response.data.errors);
    })
  }, [])
  

  const hireCandidateHandler = () => {
    navigate("/hire-candidates");
  };
  const createCommunityHandler = () => {
    navigate("/create-community");
  };
  const items = [{name: "Hire Candidates",onClickCreate:hireCandidateHandler},{name:"Create a new community",onClickCreate:createCommunityHandler}]
  return (
    <>
      <div className="top-heading">Rise Communities</div>
        {mycommunities.length > 0 ? mycommunities.map((community) => {
          return (
            <OneCommunity key={community._id} name={community.name} link={"View -->"} id={community._id}/>
          )
        }) : <div className="no-community">No Community Found</div>
        }
      <Popup items={items}/>
    </>
  )
}

export default Home
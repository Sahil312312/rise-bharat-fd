import { useNavigate } from 'react-router-dom';
import Popup from '../PopUp/Popup'
import { useContext, useEffect,useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../..';
import Context from '../../store/AuthContext';
import { toast } from 'react-hot-toast';
import OneCommunity from '../Community/OneCommunity';

const Home = () => {
  const {setIsAuthenticated,setUser,setMyCommunities,mycommunities,user} = useContext(Context);
  const [joinedCommunities, setjoinedCommunities] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    
    user.role === "Recruiter" ? axios.get(`${baseUrl}/v1/community/my-community`,{
      withCredentials: true
    }).then(res => {
      console.log("Recruiter");
      setMyCommunities(res.data.data);
    })
    .catch(err => {
      toast.error(err.response.data.errors);
    }) : 

    axios
      .get(`${baseUrl}/v1/community/join-communities`, { withCredentials: true })
      .then((response) => {
        console.log("Applicant");
        setMyCommunities(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.errors);
        console.log(error);
      });

  }, [])

  useEffect(() => {
    axios.get(`${baseUrl}/v1/user/me`,{
      withCredentials: true
    }).then(res => {
        setUser(res.data.data);
        setIsAuthenticated(true) 
      })
        .catch(err => {
        setUser({});
        setIsAuthenticated(false);
    })
  },[]);



  
  
  const hireCandidateHandler = () => {
    navigate("/hire-candidates");
  };
  const createCommunityHandler = () => {
    navigate("/create-community");
  };
  const joinCommunityHandler = () => {
    navigate("/available-communities");
  };
  const items = user.role === "Recruiter" ? [{name: "Hire Candidates",onClickCreate:hireCandidateHandler},{name:"Create a new community",onClickCreate:createCommunityHandler}] :
                                            [{name: "Join a new community",onClickCreate:joinCommunityHandler}];
  return (
    <>
      <div className="top-heading">Rise Communities</div>
        {mycommunities.length > 0 ? mycommunities.map((community) => {
          return  <OneCommunity key={community?._id} name={community?.name} link={"View -->"} id={community?._id}/>
        }) : <div className="no-community">No Community Found</div>
        }
      <Popup items={items}/>
    </>
  )
}

export default Home
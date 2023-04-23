import { useNavigate } from 'react-router-dom';
import Popup from '../PopUp/Popup'
import { useContext, useEffect,useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../..';
import Context from '../../store/AuthContext';
import { toast } from 'react-hot-toast';
import OneCommunity from '../Community/OneCommunity';
import Loader from '../Loader/Loader';

const Home = () => {
  const {setIsAuthenticated,setUser,setMyCommunities,mycommunities,user,setLoading,loading} = useContext(Context);
  // const [loading,setLoading] = useState(false);
  let navigate = useNavigate();

  

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/v1/community/my-community`,{
      withCredentials: true
    }).then(res => {
      console.log("Recruiter");
      setLoading(false);
      setMyCommunities(res.data.data);
    })
    .catch(err => {
      setLoading(false);
      console.log(err.response.data.errors);
    })
  },[])

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/v1/community/join-communities`, { withCredentials: true })
      .then((response) => {
        console.log("Applicant");
        setMyCommunities(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  },[])

  
  const logoutHandler = async () => {
    try {
      const {data} = await axios.get(`${baseUrl}/v1/auth/logout`, {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
      setIsAuthenticated(false);
    } catch (error) {
      setIsAuthenticated(true);
      toast.error(error.response.data.message);
    }
  };
  
  const hireCandidateHandler = () => {
    navigate("/hire-candidates");
  };
  const createCommunityHandler = () => {
    navigate("/create-community");
  };
  const joinCommunityHandler = () => {
    navigate("/available-communities");
  };
  const items = user.role === "Recruiter" ? [{name: "Hire Candidates",onClickCreate:hireCandidateHandler},{name:"Create a new community",onClickCreate:createCommunityHandler},{name: "Logout",onClickCreate:logoutHandler}] :
                                            [{name: "Join a new community",onClickCreate:joinCommunityHandler},{name: "Logout",onClickCreate:logoutHandler}];
  return (
    loading ? <Loader/> :
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
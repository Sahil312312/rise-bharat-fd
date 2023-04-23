import './OneCommunity.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../..';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const OneCommunity = (props) => {
  const {id} = props;
  const navigate = useNavigate();

  const clickViewHandler = () => {
    navigate(`/community/${id}`)
  }

  const joinCommunity = async () => {
    await axios
      .post(`${baseUrl}/v1/community/join-community/${id}`, {}, { withCredentials: true })
      .then((response) => {
        toast.success("Joined community successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clicKJoinHandler = () => {
    {
        joinCommunity();
    }

  };
  
  return (
    <>
        <div className="community"  >
            <div className="group-img"><img src={logo} alt="" /></div>
            <div className="group-details">
                <div className="group-name">{props?.name}</div>
                {props.link === "View -->" ? (<div className="group-link" onClick={clickViewHandler}>{props.link}</div>) : 
                (<div className="group-link" onClick={clicKJoinHandler}>{props.link}</div>)}
            </div>
        </div>
    </>
  )
}

export default OneCommunity
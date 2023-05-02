import './OneCommunity.css'
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


  const clicKJoinHandler = async() => {
    await axios
      .post(`${baseUrl}/v1/community/join-community/${id}`, {}, { withCredentials: true })
      .then((response) => {
        toast.success(`${response.data.data.community} community joined`);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

  };
  
  return (
    <>
        <div className="community"  >
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
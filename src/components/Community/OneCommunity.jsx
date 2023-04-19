import './OneCommunity.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import JobsAlert from '../JobsAlert/JobsAlert';

const OneCommunity = (props) => {
  const {id} = props;
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log(id);
    navigate(`/community/${id}`)
  }
  return (
    <>
        <div className="community"  onClick={clickHandler} >
            <div className="group-img"><img src={logo} alt="" /></div>
            <div className="group-details">
                <div className="group-name">{props?.name}</div>
                <div className="view-all" style={{color:'#7A3EFB'}}>{props?.link} </div>
            </div>
        </div>
    </>
  )
}

export default OneCommunity
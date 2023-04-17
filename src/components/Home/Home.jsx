import { Navigate, redirect, useNavigate } from 'react-router-dom';
import Popup from '../PopUp/Popup'

const Home = () => {
  let navigate = useNavigate();

  const hireCandidateHandler = () => {
    console.log("hire a candidate");
  };
  const createCommunityHandler = () => {
    navigate("/create-community");
  };
  const items = [{name: "Hire Candidates",onClickCreate:hireCandidateHandler},{name:"Create a new community",onClickCreate:createCommunityHandler}]
  return (
    <>
      <div className="top-heading">Rise Communities</div>
      <Popup items={items}/>
    </>
  )
}

export default Home
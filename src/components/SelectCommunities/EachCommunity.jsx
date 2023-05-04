import "./EachCommunity.css";
import logo from "../../assets/logo.png";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const EachCommunity = (props) => {
  const { name,id,onSaveid } = props;

  const getCommunityIdHandler = () => {
      onSaveid(id);
  };


  return (
    <>
      <div className="EachCommunity" >
        {/* <div className="community-left">
          <img src={logo} alt="logo" />
        </div> */}
        <div className="community-center">{name}</div>
        <div className="community-right">
          <Checkbox onClick={getCommunityIdHandler} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon sx={{color: "#FB823E","&.Mui-checked": { color: "#FB823E",  },}}/>}/>
        </div>
      </div>
    </>
  );
};

export default EachCommunity;

import "./JobsAlert.css";
import ThreeDotMenu from "../ThreeDotMenu/ThreeDotMenu";
import logo from "../../assets/logo.png";
import JobCard from "../JobCard/JobCard";
import EditGroupNameModal from "./EditGroupNameModal";
const JobsAlert = () => {
  
  return (
    <>
      <div className="group-heading">
            <div className="left-group">
                <div className="left-group-img">
                    <img src={logo} alt="group-logo" height={50}/>
                </div>
                <div className="right-group-text">
                    <div className="right-group-top-heading">UP Bihar Sales Job</div>
                    <div className="right-group-sub-heading">77456 Members</div>
                </div>
            </div>
            <div className="right-group">
                <ThreeDotMenu/>
            </div>
      </div>
      <div className="job-alert">JobsAlert</div>
      <JobCard/>
    </>
  );
};

export default JobsAlert;

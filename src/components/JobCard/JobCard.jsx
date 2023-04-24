import { toast } from "react-hot-toast";
import "./JobCard.css";
import { baseUrl } from "../..";
import axios from "axios";
import { useContext } from "react";
import Context from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

const JobCard = (props) => {
  const {company,role,salary,location,experience,jobId} = props;
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const onApplyHandler = async() => {
    console.log(user);
    try {
      const {data} = await axios.post(`${baseUrl}/v1/job/apply-job/${jobId}`,{}, {withCredentials: true})
      toast.success("Applied Successfully");  
    } catch (error) {
      console.log(error.response.data.errors);
      toast.error(error.response.data.errors);
    }
  }
  const onViewCandidatesHandler = async() => {
      console.log("View Candidates");
      try {
        const {data} = await axios.get(`${baseUrl}/v1/apply/${jobId}`, {withCredentials: true})
        navigate("/view-candidates",{state:{candidatesApplied : data.data,JobDetail:data.job_detail}});
      } catch (error) {
        console.log(error.response.data.errors);
      }
  }

  return (
    <>
      <div className="box">
        <div className="JobCard"><span className="job-content">Urgently Hiring </span> {role} Jobs</div>
        <hr style={{margin:"0 10px"}}/>
        <div className="JobCard"><span className="job-content">Job Role </span> {role}</div>
        <div className="JobCard"><span className="job-content">Company </span>{company}</div>
        <div className="JobCard"><span className="job-content">Experience </span> {experience} </div>
        <div className="JobCard"><span className="job-content">Salary </span> {salary}</div>
        <div className="JobCard"><span className="job-content">Location </span> {location} </div>
        <div className="JobCard">More details ...</div>
        <button className="btn-1 apply-button" onClick={user.role === "Applicant" ? onApplyHandler : onViewCandidatesHandler}>{user.role === "Applicant" ? "Apply" : "View Candidates"}</button>
      </div>
    </>
  );
};

export default JobCard;

import { useLocation, useNavigate } from 'react-router-dom'
import '../JobCard/JobCard.css'
import { useContext } from 'react';
import Context from '../../store/AuthContext';
import axios from 'axios';
import { baseUrl } from '../..';
import { toast } from 'react-hot-toast';

const FullDetail = () => {
  const {state} = useLocation()
  const {fullDetail,jobId,communityID} = state;
  const navigate = useNavigate();
  const {user} = useContext(Context);

  const onApplyHandler = async() => {
    try {
      const {data} = await axios.post(`${baseUrl}/v1/job/apply-job/${jobId}`,{}, {withCredentials: true})
      navigate(`/`)
      toast.success("Applied Successfully");  
    } catch (error) {
      navigate(`/`)
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
      <div className="JobCard"><span className="job-content">Urgently Hiring </span> {fullDetail.job_role} Jobs</div>
      <hr style={{margin:"0 10px"}}/>
      <div className="JobCard"><span className="job-content">Job Role </span> {fullDetail.job_role}</div>
      <div className="JobCard"><span className="job-content">Company </span>{fullDetail.company}</div>
      <div className="JobCard"><span className="job-content">Experience </span> {fullDetail.experience} </div>
      <div className="JobCard"><span className="job-content">Education </span> {fullDetail.educational_qualification} </div>
      <div className="JobCard"><span className="job-content">Salary </span> {fullDetail.salary}</div>
      <div className="JobCard"><span className="job-content">Location </span> {fullDetail.location} </div>
      <div className="JobCard"><span className="job-content">Total Openings </span> {fullDetail.number_of_openings} </div>
      <div className="JobCard"><span className="job-content">Job Description </span> {fullDetail.job_description} </div>
      <button className="btn-1 apply-button" onClick={user.role === "Applicant" ? onApplyHandler : onViewCandidatesHandler}>{user.role === "Applicant" ? "Apply" : "View Candidates"}</button>
    </div>
  </>
  )
}

export default FullDetail
import { useLocation } from 'react-router-dom'
import '../JobCard/JobCard.css'

const FullDetail = () => {
    const {state} = useLocation()
  const {fullDetail} = state;
  console.log(fullDetail)
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
    </div>
  </>
  )
}

export default FullDetail
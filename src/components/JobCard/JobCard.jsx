import "./JobCard.css";

const JobCard = (props) => {
  const {company,role,salary,location,experience} = props;
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
        <button className="btn-1 apply-button">Apply</button>
      </div>
    </>
  );
};

export default JobCard;

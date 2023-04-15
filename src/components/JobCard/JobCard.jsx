import "./JobCard.css";

const JobCard = () => {
  return (
    <>
      <div className="box">
        <div className="JobCard"><span className="job-content">Urgently Hiring </span> Sales Executive for PhonePe</div>
        <hr style={{margin:"0 10px"}}/>
        <div className="JobCard"><span className="job-content">Job Role </span> Sales Executive</div>
        <div className="JobCard"><span className="job-content">Company </span>PhonePe</div>
        <div className="JobCard"><span className="job-content">Experience </span> 1 Year + </div>
        <div className="JobCard"><span className="job-content">Salary </span> 18-25K</div>
        <div className="JobCard"><span className="job-content">Location </span> Delhi </div>
        <div className="JobCard">More details ...</div>
        <button className="btn-1 apply-button">Apply</button>
      </div>
    </>
  );
};

export default JobCard;

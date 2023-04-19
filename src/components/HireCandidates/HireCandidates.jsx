import { useNavigate } from 'react-router-dom';
import './HireCandidates.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../..';
import { toast } from 'react-hot-toast';
import JobCard from '../JobCard/JobCard';

const HireCandidates = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const createJobHandler = () => {
    navigate("/hire-candidates-form"); 
  }

  useEffect(() => {
    axios.get(`${baseUrl}/v1/job/my-job-posts`,{
      withCredentials: true
    }).then(res => {
      setJobs(res.data.data);
    }).catch((error) => {
      toast.error(error.response.data.message);
    });
  }, [])

  return (
    <>
      <div className="top-heading">Hire Candidates</div>
      {jobs.length > 0 ? <>
          <button className="btn-1" onClick={createJobHandler} style={{marginLeft:20}}>Create Job</button>
      </> : null}
      {jobs.length > 0 ? jobs.map((item) => {
        return (
          <JobCard key={item._id} company={item.company} role={item.job_role}
          experience={item.experience} salary={item.salary} location={item.location}
          />
        )
      }) :
        <div className="content">
          <div className="top-para">No Jobs Added</div>
          <button className="btn-1" onClick={createJobHandler}>Create Job</button>
         </div>

      }
    </>
  );
};

export default HireCandidates;

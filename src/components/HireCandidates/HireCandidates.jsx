import { useNavigate } from 'react-router-dom';
import './HireCandidates.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../..';
import { toast } from 'react-hot-toast';
import JobCard from '../JobCard/JobCard';
import Context from '../../store/AuthContext';
import Loader from '../Loader/Loader';

const HireCandidates = () => {
  const {loading,setLoading} = useContext(Context);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const createJobHandler = () => {
    navigate("/hire-candidates-form"); 
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/v1/job/my-job-posts`,{
      withCredentials: true
    }).then(res => {
      setLoading(false);
      setJobs(res.data.data);
    }).catch((error) => {
      setLoading(false);
      toast.error(error.response.data.message);
    });
  }, [])

  return (
    loading ? <Loader/> :
    <>
      <div className="top-heading">Hire Candidates</div>
      {jobs.length > 0 ? <>
          <button className="btn-1" onClick={createJobHandler} style={{marginLeft:20}}>Create Job</button>
      </> : null}
      {jobs.length > 0 ? jobs.map((item) => {
        return (
          <JobCard key={item._id} company={item.company} role={item.job_role}
          experience={item.experience} salary={item.salary} location={item.location}
          jobId={item._id}
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

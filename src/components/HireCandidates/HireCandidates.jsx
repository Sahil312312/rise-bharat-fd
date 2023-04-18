import { useNavigate } from 'react-router-dom';
import './HireCandidates.css'

const HireCandidates = () => {
  const navigate = useNavigate();
  const createJobHandler = () => {
    navigate("/hire-candidates-form"); 
  }
  return (
    <>
      <div className="top-heading">Hire Candidates</div>
      <div className="content">
        <div className="top-para">No Jobs Added</div>
        <button className="btn-1" onClick={createJobHandler}>Create Job</button>
      </div>
    </>
  );
};

export default HireCandidates;

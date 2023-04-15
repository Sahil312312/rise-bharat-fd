import JobCard from '../JobCard/JobCard'
import './HireCandidateJobs.css'

const HireCandidateJobs = () => {
  return (
    <>
        <div className='top-heading'>Hire Candidate </div>
        <button className='btn-1 center-btn'>Create Job</button>
        <JobCard/>
        <JobCard/>
    </>
  )
}

export default HireCandidateJobs
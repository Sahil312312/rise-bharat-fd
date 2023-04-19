import { useContext, useState } from 'react';
import './HireCandidatesForm.css'
import axios from 'axios';
import { baseUrl } from '../..';
import { toast } from 'react-hot-toast';
import Context from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const HireCandidatesForm = () => {
  const [jobRole, setJobRole] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');

  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [noOfOpenings, setNoOfOpenings] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobId, setJobId] = useState('');

  const {setJobData} = useContext(Context);
  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
       const {data} = await axios.post(`${baseUrl}/v1/job`, {
        job_role: jobRole,
        salary: salary,
        company: company,
        location: location,
        educational_qualification: education,
        experience: experience,
        job_description: jobDescription,
        number_of_openings: noOfOpenings,
      },{
        withCredentials: true
      });
      setJobData(data.data);
      toast.success("Job Created Successfully");
      const jobId = data.data._id;
      navigate(`/select-communities/${jobId}`);
    } catch (error) {
      toast.error(error.response.data.errors);
    }
  }
  return (
    <>
      <div className="top-heading">Hire Candidates</div>
        <div className="form-heading">Enter details</div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Job Role"  required onChange={(e)=>{setJobRole(e.target.value)}}/>
        <input type="text" placeholder="Company"  required onChange={(e)=>{setCompany(e.target.value)}}/>
        <input type="number" placeholder="Salary"  required onChange={(e)=>{setSalary(e.target.value)}}/>
        <input type="text" placeholder="Location"  required onChange={(e)=>{setLocation(e.target.value)}}/>
        <input type="text" placeholder="Education"  required onChange={(e)=>{setEducation(e.target.value)}}/>
        <input type="text" placeholder="Experience"  required onChange={(e)=>{setExperience(e.target.value)}}/>
        <input type="number" placeholder="No of Openings" required onChange={(e)=>{setNoOfOpenings(e.target.value)}} />
        <textarea name="" id="" cols="30" rows="2" placeholder='Job Description' required onChange={(e)=>{setJobDescription(e.target.value)}}></textarea>
        <button className="btn-1" >Select Communities</button>
      </form>
    </>
  );
};

export default HireCandidatesForm;

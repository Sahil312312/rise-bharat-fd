import { useContext, useState } from 'react';
import './HireCandidatesForm.css'
import axios from 'axios';
import { baseUrl } from '../..';
import { toast } from 'react-hot-toast';
import Context from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import {createJobSchema} from "../../assets/schemas/index"
import Loader from '../Loader/Loader';

const initialValues = {
  job_role: "",
  salary: "",
  company: "",
  location: "",
  educational_qualification: "",
  experience: "",
  job_description: "",
  number_of_openings: ""
}


const HireCandidatesForm = () => {
  const {setJobData,loading,setLoading} = useContext(Context);
  const navigate = useNavigate();
  
  const {values , errors , touched, handleChange,handleSubmit,handleBlur} = useFormik({
     initialValues: initialValues,
     validationSchema: createJobSchema,
     onSubmit:  async(values,action) => {
      setLoading(true);
      try {
        const {data} = await axios.post(`${baseUrl}/v1/job`, values,{
         withCredentials: true
       });
       setJobData(data.data);
       toast.success("Job Created Successfully");
       const jobId = data.data._id;
        setLoading(false);
       navigate(`/select-communities/${jobId}`);
     } catch (error) {
        setLoading(false);
       toast.error(error.response.data.errors);
     }
       action.resetForm();
     }

 });

  return (
    loading ? <Loader/> :
    <>
      <div className="top-heading">Hire Candidates</div>
        <div className="form-heading">Enter details</div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Job Role"  name="job_role"  onChange={handleChange} value={values.job_role}/>
        {touched.job_role && <p className="form-error">{errors?.job_role}</p>}
        <input type="text" placeholder="Company"  name="company"  onChange={handleChange} value={values.company}/>
        {touched.company && <p className="form-error">{errors?.company}</p>}
        <input type="number" placeholder="Salary"  name="salary"  onChange={handleChange} value={values.salary}/>
        {touched.salary && <p className="form-error">{errors?.salary}</p>}
        <input type="text" placeholder="Location"  name="location"  onChange={handleChange} value={values.location}/>
        {touched.location && <p className="form-error">{errors?.location}</p>}
        <input type="text" placeholder="Education"  name="educational_qualification"  onChange={handleChange} value={values.educational_qualification}/>
        {touched.educational_qualification && <p className="form-error">{errors?.educational_qualification}</p>}
        <input type="text" placeholder="Experience" name="experience"   onChange={handleChange} value={values.experience} />
        {touched.experience && <p className="form-error">{errors?.experience}</p>}
        <input type="number" placeholder="No of Openings" name="number_of_openings"  onChange={handleChange}  value={values.number_of_openings} />
        {touched.number_of_openings && <p className="form-error">{errors?.number_of_openings}</p>}
        <textarea  id="" cols="30" rows="2" placeholder='Job Description' name="job_description"  onChange={handleChange} value={values.job_description}></textarea>
        {touched.job_description && <p className="form-error">{errors?.job_description}</p>}
        <button type="submit" className="btn-1" >Select Communities</button>
      </form>
    </>
  );
};

export default HireCandidatesForm;

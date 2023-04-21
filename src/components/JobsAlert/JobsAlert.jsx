import "./JobsAlert.css";
import ThreeDotMenu from "../ThreeDotMenu/ThreeDotMenu";
import logo from "../../assets/logo.png";
import JobCard from "../JobCard/JobCard";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../..";
import { toast } from "react-hot-toast";
import Context from "../../store/AuthContext";

const JobsAlert = () => {
  const { id } = useParams();
  const [communityName, setCommunityName] = useState("Rise Community");
  const [jobData, setJobData] = useState([]);
  const {setIsAuthenticated} = useContext(Context);

  useEffect(() => {
    axios
      .get(`${baseUrl}/v1/community/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setCommunityName(res.data.data.name);
      })
      .catch((error) => {
        setIsAuthenticated(false);
        toast.error(error.response.data.errors);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}/v1/community/posts/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJobData(res.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.errors);
      });
  }, []);

  return (
    <>
      <div className="group-heading">
        <div className="left-group">
          <div className="left-group-img">
            <img src={logo} alt="group-logo" height={50} />
          </div>
          <div className="right-group-text">
            <div className="right-group-top-heading">{communityName}</div>
            <div className="right-group-sub-heading">77456 Members</div>
          </div>
        </div>
        <div className="right-group">
          <ThreeDotMenu />
        </div>
      </div>
      <div className="job-alert">JobsAlert</div>
      {jobData.length > 0 ? jobData.map((item)=>{
        return (
          item.job && <JobCard key={item._id} company={item.job.company} role={item.job.job_role}
          experience={item.job.experience} salary={item.job.salary} location={item.job.location}
          />
        )
      }) : <div className="no-job-alert">No Job Alert</div>}
    </>
  );
};

export default JobsAlert;

import "./ViewCandidates.css";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { CSVLink} from "react-csv";
import { Download } from "@mui/icons-material";

const ViewCandidates = () => {
  const {state} = useLocation();
  const {candidatesApplied,JobDetail} = state;
  const [users, setUsers] = useState(candidatesApplied);
  const [jobDetail, setJobDetail] = useState(JobDetail);
  const [alldata, setAllData] = useState([]);
  // const [users, setUsers] = useState([
  //   { name: "Deepak Kanwar", phone: "916386432858" },
  //   { name: "Deepak ", phone: "916386432858" },
  //   { name: " Kanwar", phone: "916386432858" },
  // ]);]

 const headers = [
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "Company", key: "company" },
    { label: "Job Role", key: "job_role" },
    { label: "Educational Qualification", key: "educational_qualification" },
    { label: "Experience", key: "experience" },
    { label: "Location", key: "location" },
    { label: "Number of Openings", key: "number_of_openings" },
    { label: "Salary", key: "salary" },
    { label: "Job Description", key: "job_description" },
  ];
  
  
  // const csvLink =  {
  //   data: data,
  //   headers: headers,
  //   filename: "Resume.csv",
  //   target: "_blank"
  // };
  
  // const downloadHandler = () => {
  //   console.log("Download");
  //   users.map((user) => {
  //     setData([{ name: user.applyBy.full_name, phone: user.applyBy.phone }]);
  //   })
  //   console.log(data);
  // }

  const handleIsChecked = (e) => {
    console.log(e.target.name);
    if (e.target.name === "Selectall") {
      setUsers(users.map((user) => ({ ...user, isChecked: e.target.checked })));
    } else {
      let tempUsers = users.map((user) => {
        return user.applyBy.full_name === e.target.name
          ? { ...user, isChecked: e.target.checked }
          : user;
      });
      setUsers(tempUsers);
    }
  };
  return (
    <>
      <div className="top-heading">View Candidates</div>
      <div className="select-all">
        <div>
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={
              <CheckCircleIcon
                sx={{ color: "#FB823E", "&.Mui-checked": { color: "#FB823E" } }}
              />
            }
            name="Selectall"
            onChange={handleIsChecked}
            checked={users.filter((user) => {return user?.isChecked}).length === users.length}
          />
        </div>
        <div className="candidate-name">Select All</div>
        <div>
          {/* <button className="btn-1 view-candidate-download">Download</button> */}
          <CSVLink data={[]} className="btn-1 view-candidate-download">Download</CSVLink>
        </div>
      </div>

      {/* Each Candidate */}
      {users.map((user) => {
        return (
          <div className="select-all" key={Math.random()}>
            <div>
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={
                  <CheckCircleIcon sx={{ color: "#FB823E", "&.Mui-checked": { color: "#FB823E" },}} />
                }
                name={user.applyBy.full_name}
                onChange={handleIsChecked}
                checked={user?.isChecked || false}
              />
            </div>
            <div className="client-name">
              <div className="candidate-name">{user.applyBy.full_name}</div>
              <div>{user.applyBy.phone}</div>
            </div>
            <div className="resume" >
              <CSVLink data = {[{ 
                  name: user.applyBy.full_name, 
                  phone: user.applyBy.phone ,
                  company: jobDetail.company,
                  job_role: jobDetail.job_role,
                  educational_qualification: jobDetail.educational_qualification,
                  experience: jobDetail.experience,
                  location: jobDetail.location,
                  number_of_openings:jobDetail.number_of_openings,
                  salary: jobDetail.salary,
                  job_description: jobDetail.job_description,
              }]} filename={`${user.applyBy.full_name}_${jobDetail.job_role}`} headers={headers} >Resume </CSVLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ViewCandidates;
  

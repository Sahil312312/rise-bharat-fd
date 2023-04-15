import "./ViewCandidates.css";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const ViewCandidates = () => {
  const [users, setUsers] = useState([
    { name: "Deepak Kanwar", phone: "916386432858" },
    { name: "Deepak ", phone: "916386432858" },
    { name: " Kanwar", phone: "916386432858" },
  ]);

  const handleIsChecked = (e) => {
    console.log(e.target.name);
    if (e.target.name === "Selectall") {
      setUsers(users.map((user) => ({ ...user, isChecked: e.target.checked })));
    } else {
      let tempUsers = users.map((user) => {
        return user.name === e.target.name
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
          <button className="btn-1 view-candidate-download">Download</button>
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
                  <CheckCircleIcon
                    sx={{
                      color: "#FB823E",
                      "&.Mui-checked": { color: "#FB823E" },
                    }}
                  />
                }
                name={user.name}
                onChange={handleIsChecked}
                checked={user?.isChecked || false}
              />
            </div>
            <div className="client-name">
              <div className="candidate-name">{user.name}</div>
              <div>{user.phone}</div>
            </div>
            <div className="resume">
              <u>Resume</u>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ViewCandidates;

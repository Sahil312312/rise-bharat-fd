import './HireCandidatesForm.css'

const HireCandidatesForm = () => {
  return (
    <>
      <div className="top-heading">Hire Candidates</div>
        <div className="form-heading">Enter details</div>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Job Role" />
        <input type="text" placeholder="Company" />
        <input type="number" placeholder="Salary" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Education" />
        <input type="text" placeholder="Experience" />
        <input type="number" placeholder="No of Openings" />
        <textarea name="" id="" cols="30" rows="2" placeholder='Job Description'></textarea>
        <button className="btn-1">Select Communities</button>
      </form>
    </>
  );
};

export default HireCandidatesForm;

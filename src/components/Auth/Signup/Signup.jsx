import Rise from "../../CompanyName/Rise";

const Signup = () => {
  return (
    <>
      <Rise />
      <form>
        <input type="text" placeholder="Enter Name" />
        <input type="number" placeholder="Enter Phone Number" />
        <button type="submit" className="btn-1"> Get OTP </button>
      </form>
    </>
  );
};

export default Signup;

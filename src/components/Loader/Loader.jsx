import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#7a3efb" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}
    wrapperClassName=""
    visible={true}
    />
  );
};

export default Loader;

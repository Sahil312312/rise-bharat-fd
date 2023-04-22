import { ThreeDots } from "react-loader-spinner";

const SmallerLoader = () => {
  return (
    <ThreeDots 
        height="20" 
        width="40" 
        radius="9"
        color="#ffffff" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />
  );
};

export default SmallerLoader;

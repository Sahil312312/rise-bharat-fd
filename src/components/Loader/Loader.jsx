import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#7a3efb"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}
      visible={true}
    />
  );
};

export default Loader;

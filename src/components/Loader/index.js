import { ThreeDots } from "react-loader-spinner";
import "./index.css";

const LoaderContainer = () => {
  return <div className="spinner-loader-container">
    <ThreeDots color="#ffe619" height="50" width="50" wrapperClass="loader" />
  </div>
};

export default LoaderContainer;

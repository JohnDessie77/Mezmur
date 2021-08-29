import * as React from "react";
import coming from "../../../assets/images/coming-soon.jpg";
import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center bg-white">
        <img src={coming} alt="coming" />
      </div>
    );
  }
}

export default Home;

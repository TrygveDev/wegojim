import "../style/routeStyles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  let nav = useNavigate();
  function navigate(destination) {
    nav(destination);
  }

  return (
    <div className="container">
      <div className="content">
        <div className="content-mid">
          <div className="mid-header">
            <h1><span>WE</span>GO<span>JIM</span></h1>
          </div>
          <div className="mid-navboxes">
            <div className="navboxes-workout" onClick={() => navigate("/workout")}>WORKOUT</div>
            <div className="navboxes-progress" onClick={() => navigate("/progress")}>PROGRESS</div>
            <div className="navboxes-prevworkouts" onClick={() => navigate("/previousworkouts")}>PREVIOUS WORKOUTS</div>
          </div>
          <div className="mid-subtitle">"Look in the mirror that's your competition"</div>
          <div className="mid-vernumb">v4.0 - BETA 7.12</div>
        </div>
      </div>
    </div>
  );
}

export default Home;

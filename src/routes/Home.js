import "../style/routeStyles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  let nav = useNavigate();
  return (
    <div className="container">
      <div className="content">
        <div className="content-mid">
          <div className="mid-header">
            <h1><span>WE</span>GO<span>JIM</span></h1>
          </div>
          <div className="mid-navboxes">
            <div className="navboxes-workout" onClick={() => nav("/workout")}>WORKOUT</div>
            <div className="navboxes-progress" onClick={() => nav("/progress")}>PROGRESS</div>
            <div className="navboxes-prevworkouts" onClick={() => nav("/previousworkouts")}>PREVIOUS WORKOUTS</div>
          </div>
          <div className="mid-subtitle">"Look in the mirror that's your competition"</div>
          <div className="mid-vernumb">v4.0 - BETA 20.12</div>
        </div>
      </div>
    </div>
  );
}

export default Home;

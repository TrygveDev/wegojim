import "../style/home.css";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DesktopNotice from "../components/DesktopNotice";
import VerNumb from "../components/VerNumb";

function Home() {

  let nav = useNavigate();
  const swipeHandler = useSwipeable({
    onSwiped: (e) => {
      if (e.dir === "Right") {
        nav("/workout");
      }
      if (e.dir === "Left") {
        nav("/progress");
      }
    }
  });

  return (
    <div {...swipeHandler} className="container">
      <VerNumb />
      <div className="content">
        <div className="content-mid">
          <h1>
            WeGoJim💪
          </h1>
          <Quote />
          <div className="mid-patchnotes">
            <h3>PATCH NOTES</h3>

            <p>v3.0</p>
            <ul>
              <li>Added:</li>
              <li>Workout information saved in seesion cookies.</li>
              <li>You can now go to another tab and the workout state will be saved.</li>
            </ul>

            <p>v2.0</p>
            <ul>
              <li>Added:</li>
              <li>Workouts created on single page from workout plan selection.</li>
            </ul>
          </div>

        </div>
        <Navbar active="Home" />
      </div>
      <DesktopNotice />
    </div>
  );
}

export default Home;

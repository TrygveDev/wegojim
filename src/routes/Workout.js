import "../style/index.css";
import "../style/workout.css";
import Navbar from "../components/Navbar";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DesktopNotice from "../components/DesktopNotice";
import Plan from "../components/Plan";

function Workout() {
    let nav = useNavigate();
    const swipeHandler = useSwipeable({
        onSwiped: (e) => {
            if (e.dir === "Left") {
                nav("/");
            }
        }
    });
    return (
        <div {...swipeHandler} className="container">
            <div className="verNumb">v1.0</div>
            <div className="content">
                <div className="content-mid">
                    <h1>
                        Workout
                    </h1>
                    <div className="mid-workouts">
                        <Plan title="Monday - Chest & Tricep" />
                        <Plan title="Tuesday - Back & Bicep" />
                        <Plan title="Thursday - Legs & Abs" />
                        <Plan title="Friday - Shoulders" />
                    </div>
                </div>
                <Navbar active="Workout" />
            </div>
            <DesktopNotice />
        </div>
    );
}

export default Workout;

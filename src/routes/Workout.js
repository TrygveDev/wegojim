import "../style/index.css";
import "../style/workout.css";
import Navbar from "../components/Navbar";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DesktopNotice from "../components/DesktopNotice";
import Plan from "../components/Plan";
import VerNumb from "../components/VerNumb";

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
            <VerNumb />
            <div className="content">
                <div className="content-mid">
                    <h1>
                        Workout
                    </h1>
                    <div className="mid-workouts">
                        <Plan title="Monday - Chest & Tricep" keyUid="monday" />
                        <Plan title="Tuesday - Back & Bicep" keyUid="tuesday" />
                        <Plan title="Thursday - Legs & Abs" keyUid="thursday" />
                        <Plan title="Friday - Shoulders" keyUid="friday" />
                    </div>
                </div>
                <Navbar active="Workout" />
            </div>
            <DesktopNotice />
        </div>
    );
}

export default Workout;

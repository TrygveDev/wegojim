import "../style/index.css";
import "../style/workout.css";
import DesktopNotice from "../components/DesktopNotice";
import Plan from "../components/Plan";
import BackBtn from "../components/BackBtn";

function Workout() {
    return (
        <div className="container">
            <BackBtn />
            <div className="timeused">00m:00s</div>
            <div className="content">
                <div className="content-mid">
                    <div className="mid-workoutSelector">
                        <select name="workout" id="workout">
                            <option value="monday">Monday Chest & Tricep</option>
                            <option value="tuesday">Tuesday Back & Bicep</option>
                            <option value="thursday">Thursday Legs & Abs</option>
                            <option value="friday">Friday Shoulders</option>
                        </select>
                    </div>










                    {/* <h1>
                        Workout
                    </h1>
                    <div className="mid-workouts">
                        <Plan title="Monday - Chest & Tricep" keyUid="monday" />
                        <Plan title="Tuesday - Back & Bicep" keyUid="tuesday" />
                        <Plan title="Thursday - Legs & Abs" keyUid="thursday" />
                        <Plan title="Friday - Shoulders" keyUid="friday" />
                    </div> */}
                </div>
            </div>
            <DesktopNotice />
        </div>
    );
}

export default Workout;

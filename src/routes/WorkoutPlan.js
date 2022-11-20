import "../style/index.css";
import "../style/workoutplan.css"
import Navbar from "../components/Navbar";
import DesktopNotice from "../components/DesktopNotice";
import Workouts from "../components/Workouts";

function WorkoutPlan() {
    return (
        <div className="container">
            <div className="verNumb">v1.0</div>
            <div className="content">
                <div className="content-mid">
                    <h1>Monday - Chest & Back</h1>
                    <div className="mid-subtitle">
                        <ul>
                            <li>Exercise</li>
                            <li>Sets</li>
                            <li>Reps</li>
                        </ul>
                    </div>
                    {/* For Each */}
                    <div className="mid-workouts">
                        <Workouts title="Bench Press" sets="3" reps="8-12" checked={true} />
                        <Workouts title="Bench Press" sets="3" reps="8-12" checked={false} />
                        <Workouts title="Bench Press" sets="3" reps="8-12" checked={false} />
                    </div>

                </div>
                <Navbar active="Workout" />
            </div>
            <DesktopNotice />
        </div>
    );
}

export default WorkoutPlan;

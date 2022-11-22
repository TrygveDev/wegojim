import "../style/index.css";
import "../style/workoutplan.css"
import Navbar from "../components/Navbar";
import DesktopNotice from "../components/DesktopNotice";
import Workouts from "../components/Workouts";
import { useLocation } from "react-router-dom";
import VerNumb from "../components/VerNumb";
import Modal from "../components/Modal";


function WorkoutPlan() {
    const location = useLocation();
    const workoutPlan = location.state.workoutplan;
    const exercises = workoutPlan.exercises;
    const exercisesComponents = Object.values(exercises).map(workout =>
        <Workouts title={workout.title} sets={workout.sets} reps={workout.reps} checked={false} key={Object.values(exercises).indexOf(workout)} />
    );
    return (
        <div className="container">
            <VerNumb />
            <Modal />
            <div className="content">
                <div className="content-mid">
                    <h1>{workoutPlan.title}</h1>
                    <div className="mid-subtitle">
                        <ul>
                            <li>Exercise</li>
                            <li>Sets</li>
                            <li>Reps</li>
                        </ul>
                    </div>
                    {/* For Each */}
                    <div className="mid-workouts">
                        {exercisesComponents}
                    </div>
                </div>
                <Navbar active="Workout" />
            </div>
            <DesktopNotice />
        </div>
    );
}

export default WorkoutPlan;

import "../style/workouts.css";

function Workouts(props) {

    return (
        <div className={props.checked ? "workout-item checked" : "workout-item"}>
            <p>{props.title}</p>
            <p>{props.sets}</p>
            <p>{props.reps}</p>
        </div>
    );
}

export default Workouts;

import "../style/workouts.css";

function Workouts(props) {

    return (
        <div className="workout-item">
            <p className="item-title">{props.title}</p>
            <p className="item-sets">{props.sets}</p>
            <p className="item-reps">{props.reps}</p>
        </div>
    );
}

export default Workouts;

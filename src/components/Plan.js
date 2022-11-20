import "../style/plan.css";
import { useNavigate } from "react-router-dom";

function Plan(props) {
    let nav = useNavigate();
    function handleClick() {
        nav("/workoutplan");
    }

    return (
        <div className="plan" onClick={handleClick}>
            <p className="plan-title">{props.title}</p>
        </div>
    );
}

export default Plan;

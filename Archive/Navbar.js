import "../style/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHome, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Navbar(props) {

    return (
        <div className="content-navbar">
            <Link className="linkButton" to={`/workout`} relative="path">
                <FontAwesomeIcon className={props.active === "Workout" ? "icon active" : "icon"} icon={faDumbbell} size="2x" />
            </Link>
            <Link className="linkButton" to={`/`} relative="path">
                <FontAwesomeIcon className={props.active === "Home" ? "icon active" : "icon"} icon={faHome} size="2x" />
            </Link>
            <Link className="linkButton" to={`/progress`} relative="path">
                <FontAwesomeIcon className={props.active === "Progress" ? "icon active" : "icon"} icon={faChartLine} size="2x" />
            </Link>
        </div>
    );
}

export default Navbar;

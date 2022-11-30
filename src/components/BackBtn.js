import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
var style = {
    back: {
        color: "white",
        position: "fixed",
        padding: "1em",
        fontSize: "1.2em",
        zIndex: "999999",
    }
}

function BackBtn() {
    let nav = useNavigate();
    function navigate(destination) {
        nav(destination)
    }
    return (
        <div style={style.back} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faChevronLeft} />
            BACK
        </div>
    );
}

export default BackBtn;

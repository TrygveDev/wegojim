import "../style/progress.css";
import Navbar from "../components/Navbar";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DesktopNotice from "../components/DesktopNotice";
import VerNumb from "../components/VerNumb";
import Charts from "../components/Charts";

function Progress() {
    let nav = useNavigate();
    const swipeHandler = useSwipeable({
        onSwiped: (e) => {
            if (e.dir === "Right") {
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
                        Progress
                    </h1>
                    <h6>Charts are just placeholders during development.</h6>
                    <Charts />
                </div>
                <Navbar active="Progress" />
            </div>
            <DesktopNotice />
        </div>
    );
}

export default Progress;

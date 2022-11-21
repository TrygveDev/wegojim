import "../style/index.css";
import Navbar from "../components/Navbar";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DesktopNotice from "../components/DesktopNotice";
import VerNumb from "../components/VerNumb";

function Home() {
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
                        Logg
                    </h1>
                </div>
                <Navbar active="Logg" />
            </div>
            <DesktopNotice />
        </div>
    );
}

export default Home;

import "../style/home.css";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DesktopNotice from "../components/DesktopNotice";

function Home() {
  let nav = useNavigate();
  const swipeHandler = useSwipeable({
    onSwiped: (e) => {
      if (e.dir === "Right") {
        nav("/workout");
      }
      if (e.dir === "Left") {
        nav("/logg");
      }
    }
  });
  return (
    <div {...swipeHandler} className="container">
      <div className="verNumb">v1.0</div>
      <div className="content">
        <div className="content-mid">
          <h1>
            WeGoJim💪
          </h1>
          <Quote />
        </div>
        <Navbar active="Home" />
      </div>
      <DesktopNotice />
    </div>
  );
}

export default Home;
import "../style/home.css";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DesktopNotice from "../components/DesktopNotice";
import VerNumb from "../components/VerNumb";

function Home() {

  let nav = useNavigate();
  const swipeHandler = useSwipeable({
    onSwiped: (e) => {
      if (e.dir === "Right") {
        nav("/workout");
      }
      if (e.dir === "Left") {
        nav("/progress");
      }
    }
  });

  return (
    <div {...swipeHandler} className="container">
      <VerNumb />
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

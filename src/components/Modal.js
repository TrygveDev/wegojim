import { useState } from "react";
import "../style/modal.css";

function Modal() {
    const [visible, setVisible] = useState(false);
    function toggleModal() {
        visible ? setVisible(false) : setVisible(true);
    }
    return (
        <div className={visible ? "modal-view show" : "modal-view"}>
            <div className="modal">
                <p>What weight did you use?</p>
                <input type="number" name="weight" placeholder="20..."></input>
                <div className="modal-btn">
                    <button onClick={toggleModal}>Cancel</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>

    );
}

export default Modal;


import "../style/modal.css";

function Modal(props) {
    function hideModal() {
        var inputValue = document.getElementById("progressInput").value
        props.setModal(false)
        console.log(inputValue)
        // Send value "DONT TRACK"
        document.getElementById("progressInput").value = ""
    }
    function submitModal() {
        var inputValue = document.getElementById("progressInput").value
        props.setModal(false)
        console.log(inputValue)
        // Send value
        document.getElementById("progressInput").value = ""
    }

    return (
        <div className={props.modalVisible ? "modal-view show" : "modal-view"}>
            <div className="modal">
                <p>What weight did you use?</p>
                <h6>Workout progress can be seen in the progress tab.</h6>
                <input id="progressInput" type="number" name="weight" placeholder="20..."></input>
                <div className="modal-btn">
                    <button onClick={hideModal}>Don't Track</button>
                    <button onClick={submitModal}>Submit</button>
                </div>
            </div>
        </div>

    );
}

export default Modal;


import "../style/modal.css";


function ConfirmModal(props) {
    function hideModal() {
        props.setConfirmModal(false, false)
    }
    function submitModal() {
        props.setConfirmModal(false, true)
    }

    return (
        <div className={props.confirmModalProps[0] ? "modal-view show" : "modal-view"}>
            <div className="modal">
                <p>Are you sure?</p>
                <h6>This can not be undone.</h6>
                <div className="modal-btn">
                    <button onClick={hideModal}>No</button>
                    <button onClick={submitModal}>Yes</button>
                </div>
            </div>
        </div>

    );
}

export default ConfirmModal;


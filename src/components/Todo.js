import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

    function closedModalHandler() {
      setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closedModalHandler} onConfirm={closedModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closedModalHandler} />}
      {/* alternative  - { modalIsOpen ? <Modal /> : null }  */}
    </div>
  );
}
export default Todo;

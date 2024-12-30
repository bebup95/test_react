import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { deleteUser } from "../../../services/apiServices";

const ModalDeleteUser = (props) => {
  const { show, setShow, userDelete } = props;

  const handleClose = () => setShow(false);
  const handleConfirm = async () => {
    alert("me");
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop={"static"}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are You Sure to delete this user. Email:
          <b> {userDelete && userDelete.email ? userDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleConfirm()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;

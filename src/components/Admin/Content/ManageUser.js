import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showHideModal, setShowHideModal] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button
            className="btn btn-light"
            onClick={() => setShowHideModal(true)}
          >
            <FcPlus /> Add new user
          </button>
        </div>
        <div className="table-users-container">
          <TableUser />
        </div>
        <ModalCreateUser show={showHideModal} setShow={setShowHideModal} />
      </div>
    </div>
  );
};

export default ManageUser;

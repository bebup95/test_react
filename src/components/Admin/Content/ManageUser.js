import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices";

const ManageUser = (props) => {
  const [showHideModal, setShowHideModal] = useState(false);

  const [ListUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

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
          <TableUser ListUsers={ListUsers} />
        </div>
        <ModalCreateUser
          show={showHideModal}
          setShow={setShowHideModal}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;

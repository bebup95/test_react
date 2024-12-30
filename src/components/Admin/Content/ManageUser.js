import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ViewInfoUser from "./ViewInfoUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
  const [showHideModal, setShowHideModal] = useState(false);
  const [ListUsers, setListUsers] = useState([]);

  const [showHideModalUpdate, setShowHideModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [showHideModalView, setShowHideModalView] = useState(false);
  const [detailUser, setDetailUser] = useState({});

  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [userDelete, setUserDelete] = useState({});

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowHideModalUpdate(true);
    setDataUpdate(user);
  };

  const resetData = () => {
    setDataUpdate({});
  };

  const resetDataDetail = () => {
    setDetailUser({});
  };

  const handleClickBtnView = (user) => {
    setShowHideModalView(true);
    setDetailUser(user);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setUserDelete(user);
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
          <TableUser
            ListUsers={ListUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          />
        </div>
        <ModalCreateUser show={showHideModal} setShow={setShowHideModal} />
        <ModalUpdateUser
          show={showHideModalUpdate}
          setShow={setShowHideModalUpdate}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetData={resetData}
        />
        <ViewInfoUser
          show={showHideModalView}
          setShow={setShowHideModalView}
          detailUser={detailUser}
          resetDataDetail={resetDataDetail}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          userDelete={userDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;

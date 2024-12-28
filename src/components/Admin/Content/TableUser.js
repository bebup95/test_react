import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices";

const TableUser = (props) => {
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
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col"> Action</th>
          </tr>
        </thead>
        <tbody>
          {ListUsers &&
            ListUsers.length > 0 &&
            ListUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <th>{index + 1}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-secondary mx-2 my-2">
                      View
                    </button>
                    <button className="btn btn-warning mx-2 my-2">
                      Update
                    </button>
                    <button className="btn btn-danger mx-2 my-2">Delete</button>
                  </td>
                </tr>
              );
            })}
          {ListUsers && ListUsers.length === 0 && (
            <tr>
              <td colSpan={4}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;

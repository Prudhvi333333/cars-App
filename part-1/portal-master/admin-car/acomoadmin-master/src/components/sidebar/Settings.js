import React, { useEffect, useState } from "react";
import BulkUsersAdd from "./BulkUsersAdd";
import "./setiings.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Button, Table } from "antd";
import { Link } from "@mui/material";
import "antd/dist/antd.css";

function Settings() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [users, setUsers] = useState([]);
  // function inputFile() {
  //   window.location.href = "/aubi";
  // }

  function addNewUser() {
    window.location.href = "/services/vehicle/vehicles/userid";
  }
  function editNewUser(id) {
    window.location.href = "/services/vehicle/vehicles/settinguserid/" + id;
  }

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/users.json"
    );

    const newData = [];
    for (let i in data) {
      newData.push({ ...data[i], id: i });
    }

    setUsers(newData);

    const cols = [];
    for (let i in newData[0]) {
      cols.push({
        title: i.toUpperCase(),
        dataIndex: i,
        key: i,
      });
    }

    cols[5] = {
      title: "View Details".toLocaleUpperCase(),
      key: "viewDetails",
      dataIndex: "viewDetails",
      render: (text, record) => (
        <button
          onClick={() => {
            editNewUser(record.id);
          }}
          className="UAB1"
        >
          View Details
        </button>
      ),
    };

    setColumns(cols);
  };

  return (
    <div className="main">
      <div className="si">
        <Sidebar />
      </div>
      <div className="settings">
        <div className="subSettings">
          <BulkUsersAdd />

          <button className="UAB" onClick={addNewUser}>
            ADD A USER
          </button>

          <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTIEgKM8Lquw4go6Fw11wOkhaymzuIWD3Dc-1PPEZiinsf8oYZ2SfPKFQvY62CSzshOHTW13l11XZdy/pub?gid=0&single=true&output=csv">
            Click here to download template
          </a>
        </div>
        <div className="uT">
          {users !== [] && (
            <Table
              dataSource={users}
              columns={columns}
              size="small"
              pagination={{
                pageSize: 5,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;

// import "./datatable.scss";
import "antd/dist/antd.css";
// import { DataGrid } from '@mui/x-data-grid';
// import { UserColumns,userRows } from '../../datatable_cab' ;
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Table } from "antd";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(user.email);
    getDataFromDB();
  }, user);
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const getDataFromDB = async () => {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/bookings.json"
    );

    var records = [];
    for (let i in data) {
      records.push(data[i]);
    }

    console.log(records);
    const updated = records.filter((r) => {
      return r.email === user.email;
    });

    const cols = [];
    for (let i in updated[0]) {
      cols.push({
        title: i.toUpperCase(),
        dataIndex: i,
        key: i,
      });
    }

    setColumns(cols);
    setData(updated);
  };

  return (
    <div className="App">
      {data !== [] && (
        <Table
          dataSource={data}
          columns={columns}
          size="small"
          pagination={{
            pageSize: 5,
          }}
        />
      )}
    </div>
  );
};

export default Datatable;

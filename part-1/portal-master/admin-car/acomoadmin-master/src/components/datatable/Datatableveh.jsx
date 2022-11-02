import "./datatable.scss";
// import { DataGrid } from '@mui/x-data-grid';
// import { UserColumns,userRows } from '../../datatable_user' ;
import axios from "axios";
import { green, red, yellow } from "@ant-design/colors";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Table } from "antd";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/staffinput.json"
    );
    const newData = [];
    for (let i in data) {
      newData.push({ ...data[i], id: i });
    }

    newData.reverse();

    const cols = [];
    cols.push({
      title: "BOOKING DATE",
      dataIndex: "Booking_Date",
      key: "Booking_Date",
    });
    cols.push({
      title: "DATE",
      dataIndex: "DATE",
      key: "DATE",
    });
    cols.push({
      title: "STATUS",
      dataIndex: "Status",
      key: "Status",
      render: (text, record) => {
        if (record.Status == "Approved") {
          return <td style={{ color: "green" }}>{record.Status}</td>;
        }
        if (record.Status == "Rejected") {
          return <td style={{ color: "yellow" }}>{record.Status}</td>;
        }
        if (record.Status == "Pending") {
          return <td style={{ color: "red" }}>{record.Status}</td>;
        }
      },
    });
    cols.push({
      title: "BOOKED FROM",
      dataIndex: "bookedFrom",
      key: "bookedFrom",
    });
    cols.unshift({
      title: "View Details".toLocaleUpperCase(),
      key: "viewDetails",
      dataIndex: "viewDetails",
      render: (text, record) => (
        <Link to={`/users/${record["id"]}`} className="btn btn-primary">
          View Details
        </Link>
      ),
    });
    cols.pop();

    setColumns(cols);
    setData(newData);
    //console.log(newData);
  }

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

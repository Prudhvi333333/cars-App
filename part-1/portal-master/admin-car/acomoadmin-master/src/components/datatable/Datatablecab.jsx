import "./datatable.scss";
import "antd/dist/antd.css";
// import { DataGrid } from '@mui/x-data-grid';
// import { UserColumns,userRows } from '../../datatable_cab' ;
import axios from "axios";
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
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs.json"
    );
    const newData = [];
    for (let i in data) {
      const available =
        Date.now() > Date.parse(data[i].busyUntil) ? "true" : "false";

      newData.push({ ...data[i], id: i, available });
    }

    const cols = [null];
    cols[0] = {
      title: "View Details".toLocaleUpperCase(),
      key: "viewDetails",
      dataIndex: "viewDetails",
      render: (text, record) => (
        <Link to={`/cabs/${record["id"]}`} className="btn btn-primary">
          View Details
        </Link>
      ),
    };
    cols.push({
      title: "RC Number",
      dataIndex: "RC_NUMBER",
      key: "RC_NUMBER",
    });
    cols.push({
      title: "Insurance",
      dataIndex: "INSURANCE_DATE",
      key: "INSURANCE_DATE",
    });
    cols.push({
      title: "Cab Number",
      dataIndex: "VEHICLE_NUMBER",
      key: "VEHICLE_NUMBER",
    });
    cols.push({
      title: "Cab Type",
      dataIndex: "COMPANY",
      key: "COMPANY",
    });
    cols.push({
      title: "Available",
      dataIndex: "available",
      key: "available",
      render: (text, record) => {
        if (record.available == "true") {
          return <td style={{ color: "green" }}>Available</td>;
        } else {
          return <td style={{ color: "red" }}>Unavailable</td>;
        }
      },
    });

    //console.log(cols);

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

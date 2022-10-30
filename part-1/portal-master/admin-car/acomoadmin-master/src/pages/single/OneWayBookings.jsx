// import "./datatable.scss";
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
      "https://carbooking-3603a-default-rtdb.firebaseio.com/bookings.json"
    );
    var newData = [];
    for (let i in data) {
      newData.push({ ...data[i], id: i });
    }

    //console.log(newData);

    newData = newData.filter((r) => r.isSingleTrip);

    const columnsOverALL = [
      "VIEW DETAILS",
      "VEHICLE_NUMBER",
      "COMPANY",
      "SEATCAPCITY",
      "INSURANCE",
      "INSURANCE DATE",
      "RC",
      "RC NUMBER",
      "KMS TRAVELLED",
      "DATE OF SERVICE",
    ];

    const cols = [];
    for (let i in newData[0]) {
      cols.push({
        title: i.toUpperCase(),
        dataIndex: i,
        key: i,
      });
    }
    // cols.unshift({
    //   title: "View Details".toLocaleUpperCase(),
    //   key: "viewDetails",
    //   dataIndex: "viewDetails",
    //   render: (text, record) => (
    //     <Link to={`/drivers/${record["id"]}`} className="btn btn-primary">
    //       View Details
    //     </Link>
    //   ),
    // });
    // //console.log(cols);

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

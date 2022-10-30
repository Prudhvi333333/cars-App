import { fontSize } from "@mui/system";

export const UserColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "Cab owner Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "doj",
    headerName: "VEHICLE_NUMBER",
    width: 230,
  },

  // {
  //     field:"From_time",
  //     headerName:"RC Number",
  //     width:230,

  // },
  // {
  //     field:"remarks",
  //     headerName:"Remarks",
  //     width:230,
  // },

  {
    field: "to",
    headerName: "Seat Capacity",
    width: 230,
  },

  {
    field: "type",
    headerName: "Vehilce Company Type/ Model ",
    width: 230,
  },

  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//temporary data
export const userRows = [
  {
    id: 1,
    username: "Prudhvi Raj",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Active",
  },
  {
    id: 2,
    username: "Rohit Sharma",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Inactive",
  },
  {
    id: 3,
    username: "virat",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Active",
  },
  {
    id: 4,
    username: "ashwin",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Inactive",
  },
  {
    id: 5,
    username: "Dhoni",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Active",
  },
  {
    id: 6,
    username: "jadeja",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Inactive",
  },
  {
    id: 7,
    username: "kumar",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Active",
  },
  {
    id: 8,
    username: "Bumarah",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Inactive",
  },
  {
    id: 9,
    username: "shami",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "AP19TC2021",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Active",
  },
  {
    id: 10,
    username: "rahane",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    doj: "25-9-2022",
    From_time: "187392032712",
    remarks: "nan",
    to: "0-5",
    type: "maruthi,5seater",
    status: "Inactive",
  },
];

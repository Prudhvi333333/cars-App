import {
  AssignmentInd,
  CalendarToday,
  ContactMail,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./edit.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function User() {
  const id = useLocation().pathname.replace("/drivers/", "");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/users/" +
      id +
      ".json"
    );
    setData(data);

    //console.log(data);
  }

  const handleChange = (e) => {
    // const newStuff = {}
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const updateToDB = async () => {
    const res = await axios.put(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/users/" +
      id +
      ".json",
      data
    );
    //console.log(res);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateToDB();
  };

  return (
    <h1>Hello world</h1>
    // <div className="user">
    //   <Sidebar />
    //   <div className="userTitleContainer">
    //     <Navbar />
    //     <div className="users">
    //       <div className="userTitleContainer">
    //         <h1 className="userTitle">Edit Driver Details</h1>
    //         <Link to="/newUser">
    //           <button className="userAddButton">Create</button>
    //         </Link>
    //       </div>
    //       <div className="userContainer">
    //       <div className="userShow">
    //         {/* <div className="userShowTop">
    //           <img
    //             src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XzbnPcReFWub6Dn5ASpGdwHaHa%26pid%3DApi&f=1"
    //             alt=""
    //             className="userShowImg"
    //           />
    //           <div className="userShowTopTitle">
    //             <span className="userShowUsername">{data.Name}</span>
    //           </div>
    //         </div> */}
    //         <div className="userShowBottom">
    //           <span className="userShowTitle">Personal Details</span>
    //           <div className="userShowInfo">
    //             <PermIdentity className="userShowIcon" />
    //             <span className="userShowInfoTitle">{data.Name}</span>
    //           </div>
    //           <div className="userShowInfo">
    //             <AssignmentInd className="userShowIcon" />
    //             <span className="userShowInfoTitle">{data.Mail}</span>
    //           </div>

    //           <div className="userShowInfo">
    //             <PhoneAndroid className="userShowIcon" />
    //             <span className="userShowInfoTitle">{data.department}</span>
    //           </div>
    //           <div className="userShowInfo">
    //             <PhoneAndroid className="userShowIcon" />
    //             <span className="userShowInfoTitle">
    //               {data.employee_id}
    //             </span>
    //           </div>
    //           <div className="userShowInfo">
    //             <ContactMail className="userShowIcon" />
    //             <span className="userShowInfoTitle">{data.mobile}</span>
    //           </div>
    //         </div>
    //       </div>
    //       {data && (
    //         <div className="userUpdate">
    //           <span className="userUpdateTitle">Edit</span>
    //           <form className="userUpdateForm" onSubmit={handleFormSubmit}>
    //             <div className="userUpdateLeft">
    //               <div className="userUpdateItem">
    //                 <label>Full Name</label>
    //                 <input
    //                   type="text"
    //                   id="name"
    //                   className="userUpdateInput"
    //                   value={data.Name}
    //                   onChange={handleChange}
    //                 />
    //               </div>
    //               <div className="userUpdateItem">
    //                 <label>Mail</label>
    //                 <input
    //                   type="text"
    //                   id="aadharcard"
    //                   className="userUpdateInput"
    //                   value={data.Mail}
    //                   onChange={handleChange}
    //                 />
    //               </div>

    //               <div className="userUpdateItem">
    //                 <label>Department</label>
    //                 <input
    //                   type="text"
    //                   id="dlnumber"
    //                   className="userUpdateInput"
    //                   value={data.department}
    //                   onChange={handleChange}
    //                 />
    //               </div>
    //               <div className="userUpdateItem">
    //                 <label>Employee Id</label>
    //                 <input
    //                   type="text"
    //                   id="mobile"
    //                   className="userUpdateInput"
    //                   value={data.employee_id}
    //                   onChange={handleChange}
    //                 />
    //               </div>
    //               <div className="userUpdateItem">
    //                 <label>Contact Number</label>
    //                 <input
    //                   type="text"
    //                   id="emergencymobile"
    //                   className="userUpdateInput"
    //                   value={data.mobile}
    //                   onChange={handleChange}
    //                 />
    //               </div>
    //             </div>
    //             <div className="userUpdateRight">
    //               <div className="userUpdateUpload">
    //                 <img
    //                   className="userUpdateImg"
    //                   src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XzbnPcReFWub6Dn5ASpGdwHaHa%26pid%3DApi&f=1"
    //                   alt=""
    //                 />
    //                 <label htmlFor="file">
    //                   <Publish className="userUpdateIcon" />
    //                 </label>
    //                 <input
    //                   type="file"
    //                   id="file"
    //                   style={{ display: "none" }}
    //                 />
    //               </div>
    //               <button
    //                 className="userUpdateButton"
    //                 onClick={handleFormSubmit}
    //                 type="submit"
    //               >
    //                 Update
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       )}
    //     </div>
    //     </div>
    //   </div>
    // </div>
  );
}

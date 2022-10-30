import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./edit.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function User(props) {
  //console.log(props);

  const location = useLocation();
  const paths = location.pathname.replace("/cabs/", "");

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs/" +
        paths +
        ".json"
    );
    setData(data);
  }

  const handleChange = (e) => {
    // const newStuff = {}
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const updateToDB = async () => {
    const res = await axios.put(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs/" +
        paths +
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
    <div className="user">
      <Sidebar />
      <div className="userTitleContainer">
        <Navbar />
        <div className="users">
          <div className="userTitleContainers">
            <h1 className="userTitle">Edit Cab Details</h1>
          </div>
          {data && (
            <div className="userContainer">
              <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm" onSubmit={handleFormSubmit}>
                  <div className="car-userUpdateLeft">
                    <div className="sub-userUpdateLeft">
                      <div className="userUpdateItem">
                        <label>VEHICLE_NUMBER</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          id="VEHICLE_NUMBER"
                          placeholder="Ex : shift dezire"
                          className="userUpdateInput"
                          value={data["VEHICLE_NUMBER"]}
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>COMPANY</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          id="COMPANY"
                          placeholder="Ex : shift dezire"
                          className="userUpdateInput"
                          value={data["COMPANY"]}
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Date of Service</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          id="DATE_OF_sERVICE"
                          placeholder="Ex : shift dezire"
                          className="userUpdateInput"
                          value={data["DATE_OF_SERVICE"]}
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Rc Number</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          id="RC_NUMBER"
                          placeholder="EX : AP25AJ0679"
                          className="userUpdateInput"
                          value={data["RC_NUMBER"]}
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Seat Capacity</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="EX : 5 seater"
                          id="SEAT_CAPACITY"
                          className="EX : userUpdateInput"
                          value={data["SEAT_CAPACITY"]}
                        />
                      </div>
                      {/* <div className="userUpdateItem">
                      <label>Vehicle Type</label>
                      <input
                        onChange = {handleChange}
                        type="text"
                        placeholder="Ex : Maruthi XUV"
                        className="userUpdateInput"
                        value={data["VEHICLE_NUMBER"]}
                      />
                    </div> */}
                      <div className="userUpdateItem">
                        <label>Number Of Kilometers Travelled</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="ex : 200"
                          className="userUpdateInput"
                          id="KMS_TRAVELLED"
                          value={data["KMS_TRAVELLED"]}
                        />
                      </div>
                    </div>
                    <div className="sub-userUpdateLeft">
                      {/* <div className="userUpdateItem">
                      <label>Number Of Kilometers This month</label>
                      <input
                        onChange = {handleChange}
                        type="text"
                        placeholder="ex : 200"
                        className="userUpdateInput"
                      />
                    </div> */}
                      <div className="userUpdateItem">
                        <label> Rc</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="ex : 200"
                          className="userUpdateInput"
                          id="RC_IMAGE"
                          value="RC_IMAGE"
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Insurance document</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="ex : 200"
                          className="userUpdateInput"
                          id="INSURANCE_IMAGE"
                          value={data["INSURANCE_IMAGE"]}
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Insurance validity Date (from)</label>
                        <input
                          onChange={handleChange}
                          type="date"
                          placeholder="ex : 200"
                          className="userUpdateInput"
                          id="INSURANCE_DATE"
                          value={data["INSURANCE_DATE"]}
                        />
                      </div>
                      <div className="userUpdateItem">
                        <label>Insurance validity Date (to)</label>
                        <input
                          onChange={handleChange}
                          type="date"
                          placeholder="ex : 200"
                          className="userUpdateInput"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="userUpdateRight">
                    {/* <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XzbnPcReFWub6Dn5ASpGdwHaHa%26pid%3DApi&f=1"
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div> */}
                    <button
                      className="btn btn-info"
                      type="submit"
                      onClick={handleFormSubmit}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* <div className="carTravel">
            <h3>car travel details</h3>
            <input type="date" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

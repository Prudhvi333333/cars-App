import React from "react";
import "./profile.css";
import ProfileImg from "./profile.png";
import { useEffect } from "react";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

function Profile() {
  function edit() {
    const mobileNumber = prompt("Enter your latest mobile number");
    const num = document.getElementById("numberPtag");
    num.innerText = mobileNumber;
    updateToDB(mobileNumber);
  }

  const updateToDB = async (mobileNumber) => {
    const res = await axios.patch(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/users/" +
        data.id +
        ".json",
      { mobile: mobileNumber }
    );
    //console.log(res);
  };

  const [data, setData] = useState({});

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        getDataFromDB(user.email);
      }
    });
  }, []);

  const getDataFromDB = async (email) => {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/users.json"
    );
    //console.log(data);
    for (let i in data) {
      if (data[i].Mail == email) {
        setData({ ...data[i], id: i });
      }
    }
  };

  return (
    <div className="Main">
      {data && (
        <div className="Sprofile">
          <div className="itag">
            <img src={ProfileImg} />
          </div>
          <div className="content">
            <div>
              <label>Employee ID</label>
              <p>{data["employee_id"]}</p>
            </div>
            <div>
              <label>Name</label>
              <p>{data.Name}</p>
            </div>
            <div>
              <label>Mail Id</label>
              <p>{data.Mail}</p>
            </div>
            <div>
              <label>Department</label>
              <p>{data.department}</p>
            </div>

            <div>
              <div className="mobileEdit">
                <label>Mobile Number</label>
                <button id="editNumber" onClick={edit}>
                  Click here to edit your mobile number
                </button>
              </div>
              <p id="numberPtag">{data.mobile}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Profile;

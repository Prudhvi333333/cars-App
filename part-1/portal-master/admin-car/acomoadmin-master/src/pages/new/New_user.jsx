import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import React, { useState, useEffect } from "react";
import "./new.scss";
import axios from "axios";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const New_user = ({ inputs, title }) => {
  const createAccount = async (email) => {
    // console.log(email);
    var password = Math.random().toString(36).slice(-10);
    const res = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    console.log(res);
  };
  const [user, setUser] = useState({
    employee_id: "",
    Name: "",
    Mail: "",
    department: "",
    mobile: "",
    designation: "",
  });
  const handelInput = (event) => {
    {
      let newInput = { [event.target.name]: event.target.value };
      setUser({ ...user, ...newInput });
      createAccount(user.Mail);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(user)
    axios
      .post(
        "https://carbooking-3603a-default-rtdb.firebaseio.com/users.json",
        user
      )
      .then(() => alert("Submitted successfully"));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XzbnPcReFWub6Dn5ASpGdwHaHa%26pid%3DApi&f=1"
              al
              t=""
            />
          </div>
          <div className="right">
            <form onSubmit={submitHandler}>
              {/* <div className="formInput" >
              <label htmlFor="file">
               Image: <DriveFolderUploadIcon className="icon"/>
                </label> 
              <input type="file"  id="file" style={{display:"none"}}/>
              </div>
              
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
               */}

              <div className="sub-right">
                <div className="sub-sub-right">
                  <div className="sr-input">
                    <label>Name</label>
                    <input type={"text"} onChange={handelInput} name="Name" />
                  </div>
                  <div className="sr-input">
                    <label>Department</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="department"
                    />
                  </div>
                  <div className="sr-input">
                    <label>SRM ID</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="employee_id"
                    />
                  </div>
                  {/* <div className="sr-input">
                    <label>Department</label>
                    <input type={'file'}/>
                  </div> */}
                </div>
                <div className="sub-sub-right">
                  <div className="sr-input">
                    <label>SRM Email</label>
                    <input type={"text"} onChange={handelInput} name="Mail" />
                  </div>
                  <div className="sr-input">
                    <label>Mobile Number</label>
                    <input type={"text"} onChange={handelInput} name="mobile" />
                  </div>
                  <div className="sr-input">
                    <label>Designation</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="designation"
                    />
                  </div>
                </div>
              </div>
              <button >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_user;

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";
import { useState } from "react";
import axios from "axios";

const Single_driver = ({ inputs, title }) => {
  const [drivers, setDrivers] = useState({
    name: "",
    aadharcard: "",
    dlnumber: "",
    emergencymobile: "",
    mobile: "",
    name: "",
    pe: "",
  });
  const handelInput = (event) => {
    {
      let newInput = { [event.target.name]: event.target.value };
      setDrivers({ ...drivers, ...newInput });
    }
  };

  const getDateFormatted = () => {
    var date = Date.now();
    date = new Date(date)
    return  date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://carbooking-3603a-default-rtdb.firebaseio.com/drivers.json",
        { ...drivers, busyUntil: getDateFormatted() }
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
              ))} */}

              <div className="sub-right">
                <div className="sub-sub-right">
                  <div className="sr-input">
                    <label>Full Name</label>
                    <input type={"text"} onChange={handelInput} name="name" />
                  </div>
                  <div className="sr-input">
                    <label>previous Expirence</label>
                    <input type={"text"} onChange={handelInput} name="pe" />
                  </div>
                  <div className="sr-input">
                    <label>Adhar Card Number</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="aadharcard"
                    />
                  </div>
                  <div className="sr-input">
                    <label>Emergency mobile number</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="emergencymobile"
                    />
                  </div>
                  <div className="sr-input">
                    <label>Permanent address</label>
                    <input type={"text"} />
                  </div>
                </div>
                <div className="sub-sub-right">
                  {/* <div className="sr-input">
                    <label>Driver Name</label>
                    <input type={'text'} onChange={handelInput} name=""/>
                  </div> */}
                  <div className="sr-input">
                    <label>Lisence number</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="dlnumber"
                    />
                  </div>
                  <div className="sr-input">
                    <label>Mobile number</label>
                    <input type={"text"} onChange={handelInput} name="mobile" />
                  </div>
                  <div className="sr-input">
                    <label>Address</label>
                    <input type={"text"} />
                  </div>
                </div>
              </div>

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_driver;

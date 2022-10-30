import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";
import { useState } from "react";
import axios from "axios";

const Single_cab = ({ inputs, title }) => {
  const [cabs, setCabs] = useState({
    COMPANY: "",
    DATE_OF_SERVICE: "",
    INSURANCE_IMAGE: "",
    INSURANCE_DATE: "",
    KMS_TRAVELLED: "",
    RC_IMAGE: "",
    RC_NUMBER: "",
    SEAT_CAPACITY: "",
    VEHICLE_NUMBER: "",
  });

  const getDateFormatted = () => {
    var date = Date.now();
    date = new Date(date);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const handelInput = (event) => {
    {
      let newInput = { [event.target.name]: event.target.value };
      setCabs({ ...cabs, ...newInput });
    }
  };
  function handleSubmitEvent(e) {
    e.preventDefault();
    axios
      .post("https://carbooking-3603a-default-rtdb.firebaseio.com/cabs.json", {
        ...cabs,
        busyUntil: getDateFormatted(),
      })
      .then(() => alert("Submitted successfully"));
  }
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
            <form onSubmit={handleSubmitEvent}>
              <div className="sub-right">
                <div className="sub-sub-right">
                  <div className="sr-input">
                    <label>Seat capacity</label>
                    <input
                      type={"number"}
                      onChange={handelInput}
                      name="SEAT_CAPACITY"
                    />
                  </div>
                  <div className="sr-input">
                    <label>Insurance</label>
                    <input
                      type={"file"}
                      onChange={handelInput}
                      name="INSURANCE_IMAGE"
                    />
                  </div>
                  <div className="sr-input">
                    <label>RC</label>
                    <input
                      type={"file"}
                      onChange={handelInput}
                      name="RC_IMAGE"
                    />
                  </div>
                  {/* <div className="sr-input">
                    <label>Kilo meters reading on service</label>
                    <input type={'text'} onChange={handelInput} name="DATE_OF_SERVICE"/>
                  </div> */}
                  <div className="sr-input">
                    <label>no of kilometers travelled</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="KMS_TRAVELLED"
                    />
                  </div>
                </div>
                <div className="sub-sub-right">
                  <div className="sr-input">
                    <label>VEHICLE_NUMBER</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="VEHICLE_NUMBER"
                    />
                  </div>
                  <div className="sr-input">
                    <label>RC</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="RC_NUMBER"
                    />
                  </div>
                  <div className="sr-input">
                    <label>Insurance reneuwal date</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="INSURANCE_DATE"
                    />
                  </div>
                  <div className="sr-input">
                    <label>Date of service</label>
                    <input
                      type={"date"}
                      onChange={handelInput}
                      name="DATE_OF_SERVICE"
                    />
                  </div>
                  <div className="sr-input">
                    <label>Vehicle model</label>
                    <input
                      type={"text"}
                      onChange={handelInput}
                      name="COMPANY"
                    />
                  </div>
                </div>
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
               */}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_cab;

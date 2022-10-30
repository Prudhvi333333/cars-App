import "./vehicle.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../../components/widgets/Widgets";
import Datatableveh from "../datatable/Datatableveh";
import Datatabledriver from "../datatable/Datatabledriver";
import Datatablecab from "../datatable/Datatablecab";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Vehicle = () => {
  function inputFile() {
    prompt("one");
  }

  const [data, setData] = useState({});

  useEffect(() => {
    loadDataFromAPI();
  }, []);

  const loadDataFromAPI = async () => {
    var cabsAvailable = 0;
    var insuranceCount = 0;
    var numberOfCabs = 0;
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs.json"
    );

    for (let i in data) {
      if (Date.parse(data[i].INSURANCE_DATE) - Date.now() <= 2.628e9) {
        insuranceCount++;
      }
      if (Date.now() - Date.parse(data[i].busyUntil) >= 0) {
        // console.log(data[i].busyUntil);
        // setCabsAvailable(cabsAvailable + 1);
        cabsAvailable++;
      }
      numberOfCabs++;
    }

    // console.log(cabsAvailable);
    setData({ cabsAvailable, insuranceCount, numberOfCabs });
  };

  return (
    <div className="vehicle">
      <div className="si">
      <Sidebar />
      </div>
      <div className="vehiclerent">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widgets type="cab" numberOfCabs={data.numberOfCabs} />
          <Widgets type="crp" cabsAvailableNow={data.cabsAvailable} />
          {/* <Widgets type="crr" /> */}
          {/* <Widgets type="ins"/>
                    <Widgets type="alrt"/> */}
        </div>
        <div className="listContainer">
          <div className="userTitleContainer">Details of the Requestor</div>
          <Datatableveh />
          <div className="userTitleContainer">
            DETAILS OF THE CAB/ ADD A CAB
            <Link
              to="/services/vehicle/vehicles/new?"
              style={{ textDecoration: "none" }}
            >
              <button className="userAddButton">ADD A CAB</button>
            </Link>
          </div>
          <Datatablecab />
          <div className="userTitleContainer">
            DETAILS OF THE DRIVER/ ADD A DRIVER
            <Link
              to="/services/vehicle/vehicles/driver?"
              style={{ textDecoration: "none" }}
            >
              <button className="userAddButton">ADD A DRIVER</button>
            </Link>
          </div>
          <Datatabledriver />
        </div>
      </div>
    </div>
  );
};

export default Vehicle;

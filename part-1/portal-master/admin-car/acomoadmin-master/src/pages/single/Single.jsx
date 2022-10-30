import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widgets from "../../components/widgets/Widgets"
import { useState } from "react"

const Single = ({selected,setSelected}) => {
  const [isActive,setIsActive]=useState(false)
  const options=[' PENDING',' APPROVED',' REJECTED']
  return (
    <div className="single">
      <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
      <div className="widgets">
        <Widgets type="rooms"/>
        <Widgets type="rooms present"/>
        <Widgets type="ro"/>
      </div>
      <div className="top">
      <div className="left">
        <div className="editButton">Edit</div>
        <h1 className="title">INFORMATION</h1>
        <div className="item">
        <img 
        src="https://media.istockphoto.com/vectors/user/.-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM=" 
        alt="" 
        className="itemImg"/>
        <div className="details">
        <h1 className="itemTitle">Prudhvi Raj</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">prudhviraj@mail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">Active</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Reason:</span>
                  <span className="itemValue">
                    Staying as a faculty within the given time period
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Remarks:</span>
                  <span className="itemValue">No</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Self:</span>
                  <span className="itemValue">Yes</span>
                </div>
                <div className="dropdown">
                  <div className="detail-btn" onClick={(e)=>
                  setIsActive(!isActive)}>
                    STATUS : 
                    {selected}
                    <span className="fas fa-caret-down"></span>
                    </div>
                    {isActive && (
                    <div className="dc">
                      {options.map((option)=>(
                        <div
                         onClick={(e)=>{
                          setSelected(option)
                          setIsActive(false)
                          }}
                          className="di">
                              {option}
                        </div>
                      ))}
                  </div>
                  )}
                </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default Single
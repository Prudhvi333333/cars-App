import React from 'react'
import Serviceitem from "../components/Serviceitem"
import Pro1 from "../assets/pro1.jpg"
import Pro2 from "../assets/pro2.jpg"
import Pro3 from "../assets/pro3.jpg"
import "../components/serviceitem.css"

const Home=() =>{
  return (
    <div className='services'>
        <h1>SERVICES</h1>
        <div className='serviceslist' >
        <Serviceitem name="ROOM ACCOMODATION" image={Pro1}/>
        <Serviceitem name="PARKING ALLOTMENT" image={Pro2}/>
        <Serviceitem name="INSURANCE CLAIM" image={Pro3}/>
        </div>
        
    </div>
    
  )
}

export default Home
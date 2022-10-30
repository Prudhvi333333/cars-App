import { Card } from '@material-ui/core'
import React from 'react'
import "./map.css"
// import cardriving from './cardriving'
const Map = () => {
  function myFunction(){
    const button = document.getElementById('detailsButton')
    const hiddenDiv = document.getElementById('carHidden')
    if(hiddenDiv.style.display === "none")
    hiddenDiv.style.display = "block"
    else
    hiddenDiv.style.display = "none"
  }
  return (
    <form class="form-horizontal">
       <div className='mapClass'>
          <div className='left'>
            <div class="input-field">
              <i class="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
              <input type="text" id="from" placeholder="Origin" name="origin" />
            </div>
            <div class="input-field">
              <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
              <input type="text" id="to" placeholder="Destination" name="destination"/>
            </div>
            <div class="input-field">
              <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
              <input type="text" id="to" placeholder="start Time" name="startTime"/>
            </div>
          </div>
          <div className='right'>
            <div class="date">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <input type="date" placeholder="from" name="from" onfocus="(this.type='date')" required/>
            </div>
            <div class="date2">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <input type="date" placeholder="to" name="to" onfocus="(this.type='date')"required/>
            </div>
            <div class="input-field">
              <i class="fa fa-road fa-lg" aria-hidden="true"></i>
              <input type="text" id="from" placeholder="Estimated distance" name="EstimatedDistance" />
            </div>
          </div>
          <div id='carDetails'>
            <button id='detailsButton' onClick={myFunction}>cab details</button>
            <div id='carHidden'>
              <h1> cab details will be displayed here</h1>
            </div>
          </div>
      </div>
    </form>

        
    
  )
}

export default Map
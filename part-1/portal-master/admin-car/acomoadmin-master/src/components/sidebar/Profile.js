import React from 'react'
import './profile.css'
import Sidebar from './Sidebar'

function Profile() {
    function edit(){
        const mobileNumber = prompt("Enter your latest mobile number")
        const num = document.getElementById("numberPtag")
        num.innerText = mobileNumber
    }
  return (
      <div id='asfd'>
        <Sidebar/>
        <div className='Main'>
            <div className='Sprofile'>
                <div className='content'>
                    <div>
                        <label>Name</label>
                        <p>Surya</p>
                    </div>
                    <div>
                        <label>Mail Id</label>
                        <p>teja_sainath@srmap.edu.in</p>
                    </div>
                    <div>
                        <label>Department</label>
                        <p>Computer science</p>
                    </div>
                    <div>
                        <label>Year of joining</label>
                        <p>2019</p>
                    </div>
                    <div>
                        <label>Mobile number</label>
                        <p>6309768098</p>
                    </div>
                    {/* <div>
                        <div className='mobileEdit'>
                            <label>Mobile Number</label>
                            <button id='editNumber' onClick={edit}>Click here to edit your mobile number</button>
                        </div>
                        <p id='numberPtag'>6309768098</p>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}
export default Profile
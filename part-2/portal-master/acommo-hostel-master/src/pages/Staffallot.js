import React from 'react'
import "./staffallot.css"
import { useState } from 'react'

function Staffallot(props) {
  return (
    <div>
      <div className='staffallot'>
        <h1 className='hh1'>Welcome</h1>
        <div className='sub'>
          <div>
          <img src="https://m.lemontreehotels.com/getattachment/a991b8ea-7ff7-45c4-9c3a-4c0476cef534/Business-Rooms.aspx" id='staffAllocImg'></img>
          </div>
          <div className='details'>
            <h3 id='h3_detaile'>Book a hotel room</h3>
            <form method='POST'>
              <div className='checkbox'>
                <div className='subCheck'>
                  <label id='self' for="name">Self</label>
                  <input type={"checkbox"}></input>
                </div>

                <div className='subCheck'>
                  <label for="name">On Behalf</label>
                  <input id='behalf' type={"checkbox"} onClick={props.data}></input>
                </div>
              </div>

              <div className='formta'>

                <div id='block'>
                  <div className='lables'>
                    <label id='name' for="name">Name</label>
                    <input type={"text"}></input>
                  </div>

                  <div className='lables'>
                    <label id='mobile' for="name">Mobile</label>
                    <input type={"text"}></input>
                  </div>

                  <div className='lables'>
                    <label id='email' for="name">Email</label>
                    <input type={"text"}></input>
                  </div>
                </div>

                <div className='lables'>
                  <label id='reason' for="name">Reason</label>
                  <input type={"text"}></input>
                </div>

                <div className='lables'>
                  <label id='remarks' for="name">Remarks</label>
                  <input type={"text"}></input>
                </div>   
              </div>

              <div className='kate'>
                <div className='subDate'>
                  <div id='kkkkk'>
                  <label>From</label>
                  </div>
                  <div id='lllll'>
                  <input type={"date"} className="kkk"></input>
                  </div>
                </div>

                <div className='subDate ooo'>
                  <label>To</label>
                  <input type={"date"} id='jjjjj'></input>
                </div>
              </div>

              <div>
                <input type={"submit"} id='submit'></input>
              </div> 
              
            </form>
          </div>  

          <div id='room'>
            <form>
              <div className='subRoom'>
                <label>Suite</label>
                <input type={"checkbox"} className="type"></input>
              </div>

              <div className='subRoom'>
                <label>Double</label>
                <input type={"checkbox"} className="type"></input>
              </div>

              <div className='subRoom'>
                <label>Single</label>
                <input type={"checkbox"} className="type"></input>
              </div>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Staffallot
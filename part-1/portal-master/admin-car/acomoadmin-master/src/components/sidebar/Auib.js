import React from 'react'
import './auib.css'
import Sidebar from './Sidebar'

function Auib() {
    function ret(){
        window.location.href = '/settings'
    }
  return (
    <div className='a'>
        <div id='s'>
            <Sidebar/>
        </div>
        <div className='fi'>
            <input class="custom-file-input" type="file"/>
            <button id='b' onClick={ret}>submit</button>
        </div>
    </div>
  )
}

export default Auib
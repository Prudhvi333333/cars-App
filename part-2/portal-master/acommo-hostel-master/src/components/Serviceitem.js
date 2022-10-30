import React from 'react'

function Serviceitem({image,name}) {
  return (
    <div className='serviceitem'>
        <div>
            <div style={{backgroundImage: `url(${image})`}} className="bg"></div>
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default Serviceitem
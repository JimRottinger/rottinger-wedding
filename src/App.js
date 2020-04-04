import React from 'react'
import ReactDom from 'react-dom'

const shadowbrookImage = require('./../img/shadowbrook.png')

const RootComponent = () => {
  return (
    <div className="center-container">
      <p className="white">James Rottinger & Aileen Saulenas</p>
      <p className="gold medium serif">3.27.2021</p>
      <img src={shadowbrookImage} />
      <p className="small serif">1 Obre Place, Shrewsbury, New Jersey 07702</p>
    </div>
  )
}

ReactDom.render(<RootComponent />, document.getElementById('react-root'))

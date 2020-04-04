import React from 'react'
import ReactDom from 'react-dom'

import { Row, Col } from 'antd'

const shadowbrookImage = require('./../img/shadowbrook.png')

const RootComponent = () => {
  return (
    <Row justify="center">
      <Col align="center">
        <p className="white">James Rottinger & Aileen Saulenas</p>
        <p className="gold medium serif">3.27.2021</p>
        <img src={shadowbrookImage} />
        <p className="small serif">
          1 Obre Place, Shrewsbury, New Jersey 07702
        </p>
      </Col>
    </Row>
  )
}

ReactDom.render(<RootComponent />, document.getElementById('react-root'))

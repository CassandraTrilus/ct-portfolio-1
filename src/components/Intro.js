import React from 'react'
import projectIcon from '../assets/projectIcon.png'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './intro.css'

function Intro({name, desc, imgSrc, downloadLink}) {
  return (
    <Container name='project' className='project-intro d-flex align-items-center mt-5'>
      <div>
        <h1>
          {name}
        </h1>
        <p>
          {desc}
        </p>
        {downloadLink}
      </div>
      <img src={imgSrc} alt='projectIcon' />
    </Container>
  )
}

export default Intro
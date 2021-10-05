import React from 'react'
import { Row, Col } from 'react-bootstrap'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import './description.css'

function Description() {
  return (
    <Row className='description'>
      <Col className='mt-5'>
        <p>
          I'm a recruiter-turned developer in love with all things technical. I love solving problems, learning from other developers, and innovating. I'm proficient in the MERN stack as well as HTML and CSS/SASS. I'm looking to join a company who values constant growth where I can hone my current skills and learn new ones! 
        </p>
      </Col>
      <Row className='description_images d-inline-flex flex-row'>
        <Col xs={2}>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/cassandratrilus">
            <img src={github} alt="github" />
          </a>
        </Col>
        <Col xs={2}>
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.linkedin.com/in/cassandra-trilus/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </Col>
      </Row>
    </Row>
  )
}

export default Description
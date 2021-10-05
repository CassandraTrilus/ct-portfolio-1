import React from 'react'
import './profile.css'
import photo from '../assets/profile-photo.jpg'
import { Image, Col, Row } from 'react-bootstrap'

function Profile() {
  return (
    <Row name='profileID' className='profile d-inline-flex flex-column'>
      <Col>
        <Image
          className='profile_image'
          src={photo}
          alt="profile image"
          roundedCircle 
        />
      </Col>
      <Col>
        <h1>Cassandra Trilus</h1>
      </Col>
      <Col>
        <h3>Software Engineer</h3>
      </Col>
    </Row>
  )
}

export default Profile
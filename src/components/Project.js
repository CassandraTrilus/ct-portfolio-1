import React from 'react'
import { Card, Button, Col, Container, Row, Image } from 'react-bootstrap'
import './project.css'

function Project({ title, desc, img, link, sourceCode }) {
  return (
    <Row className='mt-5'>
      <Col md={4} lg={4} className='d-inline-flex flex-column justify-content-center'>
        <Image src={img} fluid />
      </Col>
      <Col md={8} lg={8}>
        <div className="full-details">
          <h2 className='title-details mt-2'>
            {title}
          </h2>
          <div>
            <p className='paragraph-details'>
              {desc}
            </p>
            <Button className='button-link m-1' target='_blank' href={link} variant='dark'>Visit page</Button>
            <Button className='button-link m-1 source-teal' target='_blank' href={sourceCode} variant='success'>Source Code</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Project
import React from 'react'
import emailjs from 'emailjs-com'
import { Container, Row } from 'react-bootstrap'
import './contact.css'

function Contact() {

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
  //     process.env.REACT_APP_TEMPLATE_ID,
  //     event.target, process.env.REACT_APP_USER_ID)
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text)
  //     }, (error) => {
  //       console.log('FAILED...', error)
  //     })
  //   event.target.reset()
  //}

  return (
    <Container name='contactID' className='contact'>
      <Row className='justify-content-center'>
        <h1>Contact Me!</h1>
      </Row>
      <Row xs={12}>
        <form>
          <input placeholder='Name' type="text" name='name' required />
          <input placeholder='Email' type="email" name='email' required />
          <textarea placeholder='Message' type="textarea" name='message' required />
          <Row className='justify-content-center'>
            <input type="submit" />
          </Row>
        </form>
      </Row>
    </Container>
  )
}

export default Contact


/* onSubmit={handleSubmit} */
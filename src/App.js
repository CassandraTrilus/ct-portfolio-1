import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SyncLoader } from 'react-spinners'
import Intro from './components/Intro'
import projectIcon from './assets/projectIcon.png'
import resumeIcon from './assets/resumeIcon.png'
import Resume from './components/Resume'
import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Description from './components/Description'
import Contact from './components/Contact'
import Project from './components/Project'
import connect4 from './assets/connect4.png'
import kibblesRitz from './assets/kibblesRitz.png'
import KenzieCart from './assets/KenzieCart.png'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading => {
        return !loading
      })
    }, 2000)
  }, [])
  return (
    <div>
      <Navigation />
      {/* Home component */}
      <Container className='profile_container'>
        <Row className='app_container mt-5 align-items-center'>
          <Col xs={12} lg={6} className='d-inline-flex mt-5 justify-content-center'>
            <Profile />
          </Col>
          <Col>
            <Description />
          </Col>
        </Row>
      </Container>
      <div>
        <Intro 
          name='My Projects' 
          desc='Here are some of the projects that I have worked on ' 
          imgSrc={projectIcon}
          />
      </div>
      <div className='projects_container'>
        {/* Projects component */}
        <Project
          title='Connect 4'
          img={connect4}
          sourceCode='https://github.com/CassandraTrilus/Connect-Four'
          link='https://cassandratrilus.github.io/Connect-Four/'
          desc='This was an application built 
                in a team environment while at Kenzie Academy. I took on the Product Owner role as well as heavily contributing to the code base. I led standups and managed our task backlog during our sprint. Through effective communication and collaboration, we were able to come up with a product to be proud of.'
        />
        <Project
        title='Kibbles & Ritz'
        img={kibblesRitz}
        sourceCode='https://github.com/CassandraTrilus/Kibbles-Ritz'
        link='https://mern-pet-travel-app.herokuapp.com/'
        desc='This is the project we designed and developed for our capstone at Kenzie Academy. Kibbles & Ritz is a project designed for people who love to travel with their pets. Featuring personal profiles, favorites lists, and a Google Places integration, users can search for pet-friendly businesses on a live-updated map and filter by pet type and size. Users can save their favorites, see details and user reviews, and even submit their own reviews about their pet-friendly experiences. I acted as a developer and the design lead for this project and I came up with the concept, the UI, and some of the feature designs for the group.'
      />
      <Project
      title='KenzieCart'
      img={KenzieCart}
      sourceCode='https://github.com/CassandraTrilus/KenzieCart'
      desc='Added numerous features to a shopping cart application to improve user experience and usability:
      - Created a new object schema for coupons, added an Express endpoint to add coupon codes to the database, added another endpoint to verify the existence of the coupon code, created a user input component to allow them to apply the promo code, and created a reducer action that applied the discount to all items in the cart
      - Created a custom hook, reducer, and context to allow the user to set the currency (switch between USD ($) and Euro (€)), and have the price values update accordingly
      - Added localstorage to the shopping cart so that the state of the cart would be saved across browser sessions
      - Updated the database to store order information and modified the UI to display an order ID number upon order confirmation.'
    />
      </div>

      <div>
        <Intro
          name='Download resume!'
          desc='Click below to save a copy of my resume'
          imgSrc={resumeIcon} 
          downloadLink={<Resume/>}
          />
      </div>
      <div className="contact_container">
        {/* Contact component */}
        <Contact />
      </div>

    </div>
  )
}

export default App


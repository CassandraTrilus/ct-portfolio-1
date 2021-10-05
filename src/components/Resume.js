
import React from 'react'
// import ResumePDF from '../assets/Resume.pdf'
import './resume.css'

function Resume() {
  return (
    <button className='resume downloadPDF'> Download
      {/* <a href={ResumePDF} download='Resume'>Download</a> */}
    </button>
  )
}

export default Resume
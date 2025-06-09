import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-primary p-3 text-light'>
      <Row>
        <Col lg={5}>
        <h1>Media Player 2025</h1>
        <p style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, recusandae, aliquid repellendus eos distinctio nisi nulla dolores corrupti mollitia ducimus maxime hic exercitationem? Officia cum dolor pariatur, esse et voluptatibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos, delectus magni dolore incidunt dolores nobis, et cum unde vitae, laboriosam nemo blanditiis. Totam placeat dolorum impedit recusandae repudiandae dolore.
        </p>
        </Col>
        <Col lg={2}>
        <h1>Links</h1>
        <p><Link className='text-light'to={'/'}>Landing</Link></p>
        <p><Link className='text-light'to={'/log'}>Login</Link></p>
        <p><Link className='text-light'to={'/reg'}>Registration</Link></p>
        </Col>
        <Col lg={5}>
        <h1>Feedbacks</h1>
        <textarea name="" id="" placeholder='Enter Feedback' className='form-control'></textarea>
        <button className="btn btn-success mt-3">Send</button>
        </Col>
      </Row>
      <h2 className='text-center'>MediaPlayer 2025 &copy; Copyrights reserved.</h2>
    </div>

    </>
  )
}

export default Footer
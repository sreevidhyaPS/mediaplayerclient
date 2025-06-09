import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <div className='container-fluid'>
      <Row style={{height:'65vh'}}>
        <Col className='d-flex justify-content-center flex-column p-3'>
        <h1>Mediaplayer 2025</h1>
        <p style={{textAlign:'justify'}}>A spot for youtube video management and video streaming.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perferendis. Molestias nostrum laboriosam minima animi aliquam praesentium, et harum, vitae vel commodi quisquam officia quia, repellendus aperiam! Autem, suscipit earum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id sapiente aspernatur perspiciatis nemo tempore accusantium fuga tempora dolores inventore! Dolorem excepturi magnam laborum hic dolor necessitatibus consectetur quo assumenda.
        </p>
        <Link className='btn btn-success ' to={'/log'}>Click To Start....</Link>
        </Col>
        <Col className='d-flex justify-content-center p-2'>
           <img src="https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_1280.png"  className='img-fluid' alt="banner" />
        </Col>
      </Row>


      <div className='container p-3'>
        <h4 className='my-3'>Features</h4>
        <div className='d-flex justify-content-between'>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
      <Card.Body>
        <Card.Title>Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/943550/screenshots/2373582/media/cc45ad30c0ca5b4a3a1af98919d5ff9c.gif" />
      <Card.Body>
        <Card.Title>Easy Video Management</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://media1.giphy.com/media/kLOkqcrdC5mrCE7k7G/giphy.gif?cid=6c09b952rkcsb2qogmxa21ovbd80tb2cq66jh9g7n2xms2c8&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>

      </div>

      <div className='container-fluid p-3 bg-secondary text-light my-3'>
       <Row>
        <Col className='d-flex flex-column justify-content-center'>
        <h3>Simple , Easy and Secure</h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae laudantium nulla 
          sunt laborum odit rerum debitis sapiente pariatur rem vel possimus, numquam corrupti cum suscipit adipisci? Dignissimos, sunt quisquam?</p></Col>
        <Col>
        <img src="https://img.freepik.com/free-vector/cyber-security-risk-management-abstract-concept-illustration_335657-2162.jpg" alt="simple" className='w-75' height={'350px'} />
        </Col>
       </Row>
      </div>
      <div className='container-fluid p-2 my-2'>
        <Row>
          <Col lg={4} className='d-flex flex-column justify-content-center'>
          <h2>Checkout our New Updates</h2>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet ipsam inventore, numquam voluptas laborum aperiam animi mollitia placeat quidem alias vero iure ratione omnis modi tempora officiis autem aut.</p>
          </Col>
          <Col lg={8}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/VtF2AgFSLAw?si=omwV_fKUUwumiS-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>

      </div>
    </div>
    </>
  )
}

export default Landing
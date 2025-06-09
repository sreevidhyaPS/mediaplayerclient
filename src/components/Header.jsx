import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-cloud-arrow-up fa-xl text-info"></i>
            {' '}
            MediaPlayer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
import { Button, Container, Nav, Navbar  } from 'react-bootstrap'

export default function NavigationBar(){
  return(
    <Navbar className='p-3' style={{ backgroundColor: 'transparent'}}>
      <Container>
        <div className='d-flex justify-content-between w-100'>
          <Nav>
            <div className='position-relative'>
              <div className='big-circle-logo bg-white'></div>
              <div className='small-circle-logo bg-dark'></div>
            </div>
            &nbsp;&nbsp;
            <Navbar.Brand className='text-white d-flex'>Point</Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link className='text-white mx-2' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white mx-2' href="#platform">Platform</Nav.Link>
            <Nav.Link className='text-white mx-2' href="#apiDocs">API Docs</Nav.Link>
            <Nav.Link className='text-white mx-2' href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-white mx-2' href="#about">Sign In</Nav.Link>
            <Button className='mx-2 px-3 rounded-side' variant='light'>Sign Up</Button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}
import { Button, Container } from "react-bootstrap"

export default function AboutCard(){
  return (
    <div className="about-card mx-auto mt-3 position-relative" style={{ zIndex: 9 }}>
      <Container>
        <p className='text-white'>#About us</p>
        <p className='text-white'>"Simplicity of design, crafted for you, by our professionals"</p>
        <div className='d-flex bg-white p-1 justify-content-between' style={{ borderRadius: '3em'}}>
          <p className='my-auto' style={{ marginLeft: '14px'}}>Join Community</p>
          <Button className='about-btn'>-></Button>
        </div>
      </Container>
    </div>
  )
}
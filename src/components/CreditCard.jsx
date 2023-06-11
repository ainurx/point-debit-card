import { Container } from "react-bootstrap"

export default function CreditCard({styleWrapper, style, classes, visaStyle, textStyle}){
  return (
    <div className="position-relative" style={{ ...styleWrapper}}>
      <div className='credit-card p-3' style={{...style}}>
        {/* <div className="position-relative"> */}
        <Container className='d-flex position-relative p-0' style={{ zIndex: 1,height: '100%'}}>
            <img className="tl-0 position-absolute" src={require('../assets/visa-logo.png')} alt='visa-logo' style={{ ...visaStyle }}/>
            <span className="d-flex position-absolute align-middle tr-0">
              <img src={require('../assets/wifi.png')} alt='Debit'/>
              <p className="text-white my-auto" style={{...textStyle}}>Debit</p>
            </span>
            <p className="text-white bl-0 my-0 position-absolute" style={{...textStyle}}>Markus Aurelius</p>
            <p className='text-white br-0 my-0 position-absolute' style={{...textStyle}}>08/26</p>

            <p className="text-white align-self-center" style={{...textStyle}}>9012 5678 1234 3456</p>
        </Container>
        <div 
          className={`position-absolute ${classes}`} 
          style={{
            zIndex: 0.5, 
            top: 0,
            left: 0,
            borderRadius: '1em', 
          }}>      
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}
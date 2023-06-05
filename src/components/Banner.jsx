import { Container } from "react-bootstrap";

import CreditCard from "./CreditCard";
import AboutCard from "./AboutCard";

export default function Banner(){
  return(
    <Container>
      <div style={{ paddingTop: '100px'}}>
        <p className="text-white banner-desc">Instantly issue, manage, and process card payments with our open API platform.</p>
        <div className="d-flex">
          <div className='position-relative' style={{ zIndex: 1}}>
            <h1 className="text-white font-weight-bolder display-1 banner-title" style={{ zIndex: -1, fontFamily: 'Anton', fontSize: '132px'}}>MODERN CARD FOR MENA'S INNOVATORS</h1>
            <div className='position-absolute' style={{ zIndex: 9, top: 198, left: 3}}>
              <div className="p-1 bg-black" style={{ marginBottom: 145, width: '576px'}}></div>
              <div className="p-1 bg-black" style={{ width: '580px'}}></div>
            </div>
          </div>
          <div className="position-relative" style={{ marginLeft: '-160px', marginTop: '-25px'}}>
            <div className="mx-auto position-absolute" 
              style={{ 
                top: 150, 
                height: '300px', 
                width: '90%', 
                border: '1px solid #D9D9D9', 
                borderRadius: '1em',
                left: '5%', 
              }}>
            </div>
            <div className='position-absolute d-flex' style={{ marginTop: '-60px'}}>
              <CreditCard 
                style={{ width: '160px', height: '140px', backgroundColor: '##FAC610', transform: 'rotate(260deg)', marginLeft: '42px'}}
                classes='yellow-cc-bg' 
              />
              <CreditCard 
                style={{ width: '160px', height: '140px', backgroundColor: '#0884B9',  transform: 'rotate(275deg)'}}
                classes='blue-second-cc-bg' 
              />
              <CreditCard 
                style={{ width: '160px', height: '140px', backgroundColor: '#C52323',  transform: 'rotate(290deg)'}}
                classes='red-cc-bg' 
              />
            </div>
            <CreditCard 
              style={{ width: '480px', height: '260px', backgroundColor: '#0024E3'}}
              classes='main-cc-bg' 
            />
            <AboutCard/>
          </div>
        </div>
      </div>
    </Container>
  )
}
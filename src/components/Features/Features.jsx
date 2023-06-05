import { Container, Col, Row } from "react-bootstrap";
import _ from 'lodash'

import FAQ from "./FAQ"; 
import CreditCard from "../CreditCard";
import SumBox from "../SumBox";

const data = ['Investment Research', 'Investment Tracking', 'Data Security']

export default function Features(){
  return(
    <Container style={{ marginTop: '32px'}}>
      <div className='d-flex justify-content-between'>
        <h1 className='text-white' style={{ fontSize: '62px', fontFamily: 'Anton', width: '470px'}}>Best Features Provided by Point</h1>
        <div className='d-flex'>
          <img 
          src={require('../../assets/join-us.png')} 
          alt='arrow-up'
          style={{ width: '86px', height: '86px'}}
          />
          <h2 className='handwritten-text text-white'>Join our 100K</h2>     
        </div>
      </div>
      <div className='feature-wrapper'>
        <Container className='pt-3 pb-3'>
          <Row>
            <Col md={6}>
              <div className='mx-auto position-relative' style={{ width: 'fit-content'}}>
                <CreditCard 
                classes='blue-cc-bg' 
                styleWrapper={{ top: '80px', left: '48px'}}
                style={{ width: '250px', height: '160px', backgroundColor: '#2ABEDF', transform: 'rotate(60deg)'}}/>
                <CreditCard 
                  classes='orange-cc-bg' 
                  styleWrapper={{ top: '-80px', left: '-95px'}}
                  style={{ width: '250px', height: '160px', backgroundColor: '#FD7941', transform: 'rotate(60deg)'}}/>
                <div className='sum-wrapper'>
                  <SumBox main="40+" desc="Country"/>
                  <SumBox main='1.2M' desc='User Active' style={{ top: 60, left: 85}}/>
                </div>
              </div>
            </Col>
            <Col md={6}>
              { _.map(data, (d, index)=> <FAQ title={d} key={index} eventKey={index}/>)}
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}
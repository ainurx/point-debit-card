import { Accordion } from "react-bootstrap"

export default function FAQ({title, eventKey}){
  return(
    <Accordion className='mb-3' defaultActiveKey={0}>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          Providing research on stocks, mutual funds, and other investment can investors make app decisions about their portfolios. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
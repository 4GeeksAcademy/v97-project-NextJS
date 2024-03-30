//import "@/styles/globals.css";

import { TrafficLight } from "@/components/TrafficLight";

import { Container, Row, Col} from "react-bootstrap";

export default function About() {
    return (
      <>
        <Container>
          <Row>
            <Col>
            <h1>Traffic Light</h1>
             <TrafficLight/>
              
             
  
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
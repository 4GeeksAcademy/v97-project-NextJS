import Jumbotron from "@/components/Jumbotron";
import Link from "next/link";
import { Container } from "react-bootstrap";
import About from "./trafficLight";
import { CounterContainer } from "@/components/CounterContainer";




export default function Home() {
  return (
    <Container>
      
      <CounterContainer/>
      <Link href="/about"> Traffic Light</Link>
      
      
    </Container>
  );
}

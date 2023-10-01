import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/hero";
import Who from "./components/who";
import Works from "./components/works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: url("./img/bg.jpeg");
  font-family: "Roboto", sans-serif;
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
};

export default App;

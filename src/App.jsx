import styled from "styled-components";
import Contact from "./modules/contact/contact";
import Who from "./modules/who/who";
import Works from "./modules/work/works";
import Hero from "./modules/home/hero";

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

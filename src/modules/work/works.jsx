import styled from "styled-components";
import Torus from "./torus";

const listTitles = [
  "Web design",
  "Development",
  "Illustration",
  "Product design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  position: relative;
  display: inline-block;
  font-size: 4em;
  font-weight: 800;
  -webkit-text-stroke: 1px white;
  overflow: hidden;
  background: linear-gradient(to right, #da4ea2, #da4ea2 50%, transparent 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 500ms ease;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 2em;
    background-color: #fff;
    -webkit-text-stroke: 0px;
  }

  &:hover {
    background-position: 0 100%;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {listTitles.map((title, index) => (
              <ListItem key={index}>{title}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <Torus />
        </Right>
      </Container>
    </Section>
  );
};

export default Works;

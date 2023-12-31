import styled from "styled-components";
import Navbar from "./navbar";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 95%;
    flex: 1;
    align-items: center;
    height: 100vh;

    scroll-snap-align: center;
  }
`;

const Title = styled.h1`
  font-size: 40px;

  @media only screen and (max-width: 768px) {
    width: 50%;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Description = styled.p`
  font-size: 16px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: #fff;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 100vh;

    scroll-snap-align: center;
  }
`;

const Image = styled.img`
  width: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease-in-out alternate;

  @media only screen and (max-width: 768px) {
    height: 95%;
    width: 95%;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Description>
            We enjoy creating delightful, human-centered digital experiences.
          </Description>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <ambientLight intensity={2} />
            <directionalLight position={[0, 50, 5]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color={"#300b4c"}
                attach="material"
                distort={0.6}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Image src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

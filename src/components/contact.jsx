import { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 5px;
  border: none;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 5px;
  border: none;
  resize: none;
  font-family: "roboto", sans-serif;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  const [emailFeedback, setEmailFeedback] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ls05tn8",
        "template_4la7vvb",
        form.current,
        "ryhEcpFVsEcTpZ36-",
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailFeedback("Email sent successfully!");
          cleanupMessage();
        },
        (error) => {
          console.log(error.text);
          setEmailFeedback(
            "Sorry, but there was a problem sending your email...",
          );
          cleanupMessage();
        },
      );
  };

  const cleanupMessage = () => {
    form.current.reset();
    setTimeout(() => {
      setEmailFeedback("");
    }, 4000);
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit} ref={form}>
            <Title>Contact us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              rows={10}
              name="message"
            />
            <Button type="submit">Send</Button>
            <span>{emailFeedback}</span>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;

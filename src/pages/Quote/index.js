import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Quote = () => {
  const navigate = useNavigate();
  const newQuote = () => {
    navigate("/home");
  };
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md="4"></Col>
          <Col md="4">
            <Card>
              <Card.Header as="h5">Amitron Quoting</Card.Header>
              <Card.Body className="text-center">
                <Card.Title>
                  Welcome to the Amitron quoting platform.
                </Card.Title>
                <Card.Text>Click below to get started on your quote.</Card.Text>
                <Button variant="secondary" onClick={newQuote}>
                  New Quote
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Quote;

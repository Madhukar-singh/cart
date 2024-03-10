import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Form from "react-bootstrap/Form";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <>
      <Container className="mt-4">
        <div className="home">
          <div className="productContainer">
            <Row>
              <Col md={1}>
                <p>
                  <b>Material</b>
                </p>
              </Col>
              <Col md={2}>
                <p>
                  <b>Solder Mask</b>
                </p>
              </Col>
              <Col md={2}>
                <p>
                  <b>Legend Type</b>
                </p>
              </Col>
              <Col md={2}>
                <p>
                  <b>Surface Finish</b>
                </p>
              </Col>
              <Col md={1}>
                <p>
                  <b>Price</b>
                </p>
              </Col>
              <Col md={2}>
                <p>
                  <b>Quantity</b>
                </p>
              </Col>
              <Col md={1}>
                <p>
                  <b>Action</b>
                </p>
              </Col>
            </Row>
            <ListGroup style={{ paddingTop: "20px" }}>
              {cart.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <Row>
                    <Col md={1}>
                      <span>{prod.material}</span>
                    </Col>
                    <Col md={2}>
                      <span>{prod.solderMask}</span>
                    </Col>
                    <Col md={2}>
                      <span>{prod.legendType}</span>
                    </Col>
                    <Col md={2}>
                      <span>{prod.surfaceFinish}</span>
                    </Col>
                    <Col md={1}>
                      <span>{prod.price}</span>
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={prod.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() =>
                          dispatch({ type: "REMOVE_TO_CART", payload: prod })
                        }
                      >
                        <AiFillDelete fontSize="20px" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="filtersCart">
            <span className="title">Subtotal ({cart.length}) items</span>
            <span style={{ fontWeight: 700, fontSize: 20 }}>
              Total:Rs {total}
            </span>
            <Button type="button" className="mt-4" disabled={cart.length === 0}>
              proceed to checkout
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;

import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { CartState } from "../context/Context";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const SingleProuduct = ({ prod, count }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(prod);
  return (
    <>
      <Row lassName="mb-3">
        <Form.Label as={Col}>{prod.inStock}</Form.Label>
        <Form.Label as={Col}>{prod.price * 1}</Form.Label>
        <Form.Label as={Col}>{prod.price * 2}</Form.Label>
        <Form.Label as={Col}>{prod.price * 3}</Form.Label>
        <Form.Label as={Col}>
          {" "}
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_TO_CART",
                  payload: prod,
                });
              }}
            >
              Remove to cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "out of Stock" : "Add to cart"}
            </Button>
          )}
        </Form.Label>
      </Row>
    </>
  );
};

export default SingleProuduct;

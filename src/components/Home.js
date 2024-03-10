import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProuduct";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const {
    state: { products },
    state: { quoteDetials },
    productState: {
      sort,
      byStock,
      byFastDelivery,
      byMaterial,
      bySurfaceFinish,
      byLegendType,
      searchQuery,
      bySolderMask,
    },
    state: { cart },
    productDispatch,
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    // let count = 1;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byMaterial) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.material === byMaterial
      );
    }

    if (bySolderMask) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.solderMask === bySolderMask
      );
    }

    if (byLegendType) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.legendType === byLegendType
      );
    }
    if (bySurfaceFinish) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.surfaceFinish === bySurfaceFinish
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <>
      <Container>
        <Row>
          <Col style={{ marginTop: "20px" }}>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col>
                      <b>Quote Number : </b>
                      {quoteDetials.quoteNo}
                    </Col>
                    <Col>
                      <b>Date: </b>
                      {quoteDetials.date}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b>Part# : </b>
                      {quoteDetials.part}
                    </Col>
                    <Col>
                      <b>Status Processing.....</b>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: "20px" }}>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col>
                      <b>Image 1</b>
                    </Col>
                    <Col>
                      <b>Image 2</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image
                        src={quoteDetials.image}
                        rounded
                        style={{ border: "none", width: "100%" }}
                      />
                    </Col>
                    <Col>
                      <Image
                        src={quoteDetials.image}
                        rounded
                        style={{ border: "none", width: "100%" }}
                      />
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 style={{ marginTop: "20px" }} className="mb-3">
          Part Specification
        </h1>
        <Row>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col>
                      <b>Layers : {quoteDetials.layer} Layers </b>{" "}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b>Min Hole : {quoteDetials.minHole} ml </b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b>
                        Min Trace/Space : {quoteDetials.minTrace} ml/
                        {quoteDetials.minTrace}mil{" "}
                      </b>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 style={{ marginTop: "20px" }} className="mb-3">
          Quote Options
        </h1>
        <Row>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Label as={Col}>
                      <b>Material Type</b>
                    </Form.Label>
                    <Form.Group as={Col} controlId="formGridMaterialType">
                      <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => {
                          productDispatch({
                            type: "FILTER_BY_Material",
                            payload: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select Material type</option>
                        <option value="FR4">FR4</option>
                        <option value="FR3">FR3</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Label as={Col}>
                      <b>Solder Mask</b>
                    </Form.Label>
                    <Form.Group as={Col} controlId="formGridSolderMaskType">
                      <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => {
                          productDispatch({
                            type: "FILTER_BY_SolderMask",
                            payload: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select type</option>
                        <option value="sided">sided</option>
                        <option value="Black">Black</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSolderMaskColor">
                      <Form.Select defaultValue="Choose...">
                        <option>Select color</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Label as={Col}>
                      <b>Legend Type</b>
                    </Form.Label>
                    <Form.Group as={Col} controlId="formGridLegendType">
                      <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => {
                          productDispatch({
                            type: "FILTER_BY_LegendType",
                            payload: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select type</option>
                        <option value="sided">Sided</option>
                        <option value="Black">Black</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLegendColor">
                      <Form.Select defaultValue="Choose...">
                        <option>Select color</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Label as={Col}>
                      <b>Surface Finish</b>
                    </Form.Label>
                    <Form.Group as={Col} controlId="formGridSurfaceType">
                      <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => {
                          productDispatch({
                            type: "FILTER_BY_Surface_Finish",
                            payload: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select type</option>
                        <option value="ENIG">ENIG</option>
                        <option value="BNIG">BNIG</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col>
            {" "}
            <h1 className="mb-3">Quote Number : {quoteDetials.quoteNo}</h1>
          </Col>
          <Col>
            <Link to="/cart">
              <Button style={{ width: "95%", margin: "0 10px" }}>
                {" "}
                {cart.length} go to cart
              </Button>
            </Link>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Label as={Col}>
                      <b>Quantity</b>
                    </Form.Label>
                    <Form.Label as={Col}>
                      <b>Lead Time 1</b>
                    </Form.Label>
                    <Form.Label as={Col}>
                      <b>Lead Time 2</b>
                    </Form.Label>
                    <Form.Label as={Col}>
                      <b>Lead Time 3</b>
                    </Form.Label>
                    <Form.Label as={Col}>
                      <b>Action</b>
                    </Form.Label>
                  </Row>

                  {transformProducts().map((prod, count = 1) => (
                    <SingleProduct
                      prod={prod}
                      key={prod.id}
                      count={count + 1}
                    />
                  ))}
                  {/* </Row> */}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

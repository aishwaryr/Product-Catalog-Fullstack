import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./Header";
import ProductCard from "./ProductCard";

const Details = props => {
  const { title, description, createdAt, price, quantity, picture, _id } = props.location.state;
  return (
    <div>
      <Header addProduct />
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <ProductCard product={props.location.state} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;

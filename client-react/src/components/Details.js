import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./Header";
import ProductCard from "./ProductCard";

const Details = props => {
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

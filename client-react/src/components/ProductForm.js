import React, { Component } from "react";
import Formsy from "formsy-react";
import RaisedButton from "material-ui/RaisedButton";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import MyInput from "./formsy-components/Input";
import Header from "./Header";
import { addProductToDB } from "../api";
import { updateProductInDB } from "../api";

const reactToastObject = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 60
};

class ProductForm extends Component {
  state = {
    canSubmit: false,
    title: "",
    description: "",
    price: null,
    quantity: null,
    picture: "",
    productId: null,
    createdAt: null
  };

  submit = data => {
    data.price = parseFloat(parseFloat(data.price).toFixed(2));
    data.quantity = parseInt(Math.floor(data.quantity));
    console.log(data);
    if (this.props.location.state !== undefined) {
      data.updatedAt = Date.now();
      updateProductInDB(this.state.productId, data)
        .then(response => {
          console.log(response);
          toast.success(`${data.title} has been updated.`, reactToastObject);
          this.productForm.reset();
        })
        .catch(err => {
          toast.error("Oops, Something went wrong. Please try again.", reactToastObject);
        });
    } else {
      data.createdAt = Date.now();
      addProductToDB(data)
        .then(response => {
          console.log(response);
          toast.success(`${data.title} has been added.`, reactToastObject);
          this.productForm.reset();
        })
        .catch(err => {
          toast.error("Oops, Something went wrong. Please try again.", reactToastObject);
        });
    }
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  resetForm = () => {
    this.productForm.reset();
  };

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { title, description, createdAt, price, quantity, picture, _id } = this.props.location.state;
      console.log(this.props.location.state);
      this.setState(function(prevState, props) {
        return {
          title,
          description,
          price,
          quantity,
          picture,
          productId: _id,
          createdAt
        };
      });
      console.log(this.state);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Header />
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Formsy
                ref={event => {
                  this.productForm = event;
                }}
                onSubmit={this.submit}
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                className="add-garage-form"
              >
                <MyInput name="title" title="Product Title" type="text" required value={this.state.title} />
                <MyInput
                  name="description"
                  title="Product Description"
                  type="text"
                  required
                  value={this.state.description}
                />
                <MyInput name="price" title="Price" type="number" required value={this.state.price} />
                <MyInput name="quantity" title="Quantity" type="number" required value={this.state.quantity} />
                <MyInput name="picture" title="Picture URL" type="text" value={this.state.picture} required />
                <RaisedButton
                  type="submit"
                  label="Submit"
                  value={this.state.nameForm}
                  primary={true}
                  labelColor={"#FFFFFF"}
                  disabled={!this.state.canSubmit}
                />
              </Formsy>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductForm;

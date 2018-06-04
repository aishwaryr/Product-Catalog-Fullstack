import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let navbarControl;
    if (this.props.addProduct) {
      navbarControl = (
        <Link to="/product-form" className="btn btn-primary">
          Add New Product
        </Link>
      );
    } else {
      navbarControl = (
        <Link className="btn btn-danger" to="/">
          Back
        </Link>
      );
    }
    return (
      <Navbar color="danger" dark expand="md">
        <NavbarBrand href="/">Product Catalog</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navbarControl}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;

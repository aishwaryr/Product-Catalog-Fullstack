import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductsFromDB } from "../api";

import Header from "./Header";
import ProductCard from "./ProductCard";

class Catalog extends Component {
  componentDidMount() {
    // console.log(this.props.message);
    if (!this.props.products) {
      this.props.loadProducts();
    }
  }
  render() {
    console.log(this.props);
    if (this.props.products && this.props.products.length === 0) {
      return (
        <React.Fragment>
          <Header addProduct />
          <h4 className="text-center"> No Products Added Yet! </h4>
        </React.Fragment>
      );
    }
    let catalogSection;
    if (this.props.products) {
      catalogSection = this.props.products.map(product => (
        <ProductCard key={product._id} product={product} showDetails />
      ));
    } else {
      catalogSection = <p> Please wait... </p>;
    }

    return (
      <React.Fragment>
        <Header addProduct />
        <div className="search"> {catalogSection} </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const productsData = state.productsData ? state.productsData : {};
  return {
    ...productsData
  };
};

const mapDispatchToProps = dispatch => ({
  loadProducts() {
    dispatch(fetchProductsFromDB());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

import React, { Component } from "react";
import { Link } from "react-router-dom";

import DeleteProduct from "./DeleteProduct";
import { formatDate } from "../helpers";

class ProductCard extends Component {
  render() {
    let detailsControl;
    if (this.props.showDetails) {
      detailsControl = (
        <Link to={{ pathname: `/product/${_id}`, state: { ...this.props.product } }} className="btn btn-default">
          See Details
        </Link>
      );
    }
    const { title, description, createdAt, price, quantity, picture, _id } = this.props.product;
    return (
      <div className="card show-card product-card">
        <img className="card-img-top" src={picture} alt={`${title}`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Created On: {formatDate(createdAt)}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Quantity: {quantity}</p>
          {detailsControl}
          <br />
          <DeleteProduct _id={_id} />
          <Link to={{ pathname: `/product-form`, state: { ...this.props.product } }} className="btn btn-primary">
            Edit
          </Link>
        </div>
      </div>
    );
  }
}
export default ProductCard;

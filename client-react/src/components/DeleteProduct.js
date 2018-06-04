import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProductsFromDB } from "../api";
import { deleteProductFromDB } from "../api";

class DeleteProduct extends Component {
  state = {
    askForConfirmation: false
  };

  toggleConfirmation = () => {
    this.setState(function(prevState, props) {
      return { askForConfirmation: !prevState.askForConfirmation };
    });
  };

  callDeleteProductAPI = () => {
    console.log(this.props._id);
    deleteProductFromDB(this.props._id).then(response => {
      this.props.loadProducts();
      console.log("deleted");
    });
  };

  render() {
    if (this.state.askForConfirmation) {
      return (
        <div>
          <p>
            Are You Sure? &nbsp;&nbsp;
            <span className="delete-confirm delete-yes" onClick={this.callDeleteProductAPI}>
              Yes
            </span>
            &nbsp;&nbsp;
            <span className="delete-confirm delete-no" onClick={this.toggleConfirmation}>
              Cancel
            </span>
          </p>
        </div>
      );
    }
    return (
      <button className="btn btn-danger " onClick={this.toggleConfirmation}>
        Delete
      </button>
    );
  }
}

// export default DeleteProduct;
const mapDispatchToProps = dispatch => ({
  loadProducts() {
    dispatch(fetchProductsFromDB());
  }
});

export default connect(null, mapDispatchToProps)(DeleteProduct);

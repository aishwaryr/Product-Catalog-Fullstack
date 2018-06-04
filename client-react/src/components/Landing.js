import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setSearchTerm } from "../actionCreators";
import Header from "./Header";

class Landing extends Component {
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className="landing">
        <Header />
        <div className="landing-form col-md-4 offset-md-4">
          <h3>Get Data Here</h3>
          <form onSubmit={this.goToSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={this.props.searchTerm}
              onChange={this.props.handleSearchTermChange}
            />
          </form>
          <Link to="/search">or Browse All</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    a: state.dishes,
  };
};

class Home extends Component {
  render() {
    document.title = "Restrnt";
    return <div></div>;
  }
}

export default connect(mapStateToProps)(Home);

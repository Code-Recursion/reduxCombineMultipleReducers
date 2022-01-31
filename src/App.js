import "./App.css";
import { connect } from "react-redux";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div>
            <p>
              A:{this.props.a} B:{this.props.b}
            </p>
          </div>
          <button
            onClick={() => {
              this.props.onUpdateA(this.props.b);
            }}
          >
            updateA
          </button>
          <button
            onClick={() => {
              this.props.onUpdateB(this.props.a);
            }}
          >
            updateB
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.reducerA.a,
    b: state.reducerB.b,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateA: (b) => {
      dispatch({ type: "UPDATE_A", b });
    },
    onUpdateB: (a) => {
      dispatch({ type: "UPDATE_B", a });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

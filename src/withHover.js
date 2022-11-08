import { Component } from "react";

const withHover = (WrappedComponent) => {
  return class extends Component {
    static displayName = `withHover(${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;
    state = {
      on: false,
    };

    onMouseOver = () => {
      this.setState({ on: true });
    };
    onMouseOut = () => {
      this.setState({ on: false });
    };
    render() {
      let style = {};
      if (this.state.on) {
        style = {
          border: "1px solid red",
        };
      }
      return (
        <div
          style={style}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
export default withHover;

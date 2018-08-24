import React from "react";
import ReactDOM from "react-dom";
import Observer from "react-intersection-observer";
import "./styles.css";

const headerHeight = 100;
const pixelRootMargins = `${headerHeight}px 0px 0px 0px`;
const percentageRootMargins = "0% 0% -94% 0%";
const rootMargin = percentageRootMargins;

class App extends React.Component {
  state = {
    isInView: false
  };

  renderParagraphs(num = 10) {
    return Array(num)
      .fill(true)
      .map(() => <p>Paragraph</p>);
  }

  render() {
    console.log(this.state.isInView);

    return (
      <React.Fragment>
        {this.renderParagraphs()}
        <div style={{ border: "1px solid black" }}>
          <Observer
            tag="div"
            onChange={isInView => {
              this.setState({ isInView });
            }}
            rootMargin={rootMargin}
          >
            <span>In view? {this.state.isInView ? "Yes" : "No"}</span>
          </Observer>
        </div>
        {this.renderParagraphs(50)}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: headerHeight,
            right: 0,
            background: this.state.isInView ? "green" : "yellow",
            opacity: 0.25
          }}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

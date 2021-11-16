import React, { Component } from "react";

class Counter extends React.Component {
  //   state = {
  //     //this.props.value vai buscar ao counter.jsx a value que la esta
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"],
  //     // imageUrl: "https://picsum.photos/200",
  //   };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return this.loadTags();
    }
  }

  loadTags() {
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = (product) => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    // React.createElement
    return (
      <React.Fragment>
        {/* {this.props.children} */}
        {/* <img src="this.state.imageUrl" alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br></br>
        {/* <div>
          {this.state.tags.length === 0 && "Please create a new tag!"} 
          {this.renderTags()}
        </div> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter; //podemos meter esta linha antes da classe: "export default class Counter ..."

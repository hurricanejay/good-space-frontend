import React from "react";

class PostForm extends React.Component {
  state = {
    title: "",
    date: "",
    location: "",
    description: "",
    tag: "",
    category: ""
  };

  onChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
}

onSubmit = (event) => {
    event.preventDefault()
}

  render() {
    return (
      <form onChange={this.onChange}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Title"
        ></input>
        <input
          type="text"
          name="date"
          value={this.state.date}
          placeholder="Date"
        ></input>
        <input
          type="text"
          name="location"
          value={this.state.location}
          placeholder="Zip Code"
        ></input>
        <input
          type="text"
          name="category"
          value={this.state.category}
          placeholder="Category"
        ></input>
        <input
          type="text"
          name="tag"
          value={this.state.tag}
          placeholder="Tag"
        ></input>
        <input
          typearea="text"
          name="description"
          value={this.state.description}
          placeholder="Description"
        ></input>
        <button submit={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default PostForm;

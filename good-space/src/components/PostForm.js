import React from "react";
import { Button } from "react-bootstrap";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

class PostForm extends React.Component {
  state = {
    title: "",
    location: "",
    description: "",
    tag: "",
    category: "",
    date: "",
    // startDate: new Date(),
    user_id: 1
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const newPost = this.state;
    this.props.addNewPost(newPost);
    this.setState({
      title: "",
      date: "",
      location: "",
      description: "",
      tag: "",
      category: ""
    });
  };

  render() {
    //   console.log(this.props.addNewPost, 'add new post func?')
    console.log(this.state.description, 'desc??')
    return (
      <div>
        <form className="post-form" onSubmit={this.onSubmit}>
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            class="form-control"
            onChange={this.onChange}
          />
          <br />
          <label for="date">Date</label>
          <input
            type="text"
            name="date"
            value={this.state.date}
            class="form-control"
            onChange={this.onChange}
          />
          <br />
          {/* <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            class="form-control"
            name="start-date"
          /> */}
          <br />
          <label for="location">Zip Code</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            class="form-control"
            onChange={this.onChange}
          />
          <br />
          <label for="category">Category</label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            class="form-control"
            onChange={this.onChange}
          />
          <br />
          <label for="Tag">Tag</label>
          <input
            type="text"
            name="tag"
            class="form-control"
            value={this.state.tag}
            onChange={this.onChange}
          />
          <br />
          <label for="description">Description</label>
          <textarea
          type="text"
            name="description"
            value={this.state.description}
            class="form-control"
            rows={7}
            onChange={this.onChange}
          />
          
          <br />
          <Button type="submit">Submit</Button>
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default PostForm;

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
    user_id: localStorage.user_id
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
    // console.log(this.state.description, 'desc??')
    return (
      <div>
        <form className="post-form" onSubmit={this.onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            className="form-control"
            onChange={this.onChange}
          />
          <br />
          <label htmlFor="date">Date</label>
          <input
            type="text"
            name="date"
            value={this.state.date}
            className="form-control"
            onChange={this.onChange}
          />
          <br />
          {/* <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            className="form-control"
            name="start-date"
          /> */}
          <br />
          <label htmlFor="location">Zip Code</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            className="form-control"
            onChange={this.onChange}
          />
          <br />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            className="form-control"
            onChange={this.onChange}
          />
          <br />
          <label htmlFor="Tag">Tag</label>
          <input
            type="text"
            name="tag"
            className="form-control"
            value={this.state.tag}
            onChange={this.onChange}
          />
          <br />
          <label htmlFor="description">Description</label>
          <textarea
          type="text"
            name="description"
            value={this.state.description}
            className="form-control"
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

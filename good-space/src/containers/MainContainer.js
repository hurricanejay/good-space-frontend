// import React from "react";
// import AllPosts from "./AllPosts";
// import MyPosts from "./MyPosts";

// const postsAPI = "http://localhost:3000/posts";

// class MainContainer extends React.Component {
//   state = {
//     posts: []
//   };

//   componentDidMount() {
//     fetch(postsAPI)
//       .then(response => response.json())
//       .then(posts => this.setState({ posts }));
//   }

//   addNewPost = newPost => {
//     fetch(postsAPI, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         accept: "application/json"
//       },
//       body: JSON.stringify(newPost)
//     })
//       .then(res => res.json())
//       .then(posts => {
//         this.setState({ posts: [posts, ...this.state.posts] });
//       });
//   };

//   render() {
//     // console.log(this.state.posts, "props??")
//     // console.log(this.addNewPost, 'adding new post?')
//     return (
//       <div className="main">
//           <AllPosts posts={this.state.posts}/>
//           <MyPosts />
//       </div>
//     );
//   }
// }

// export default MainContainer;

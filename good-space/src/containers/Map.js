// import React from "react";
// import ReactDOM from "react-dom";

// const postsAPI = "http://localhost:3000/posts";

// const mapStyles = {
//   map: {
//     position: "absolute",
//     width: "40%",
//     height: "40%"
//   }
// };

// export class CurrentLocation extends React.Component {
//   constructor(props) {
//     super(props);

//     const { lat, lng } = this.props.initialCenter;

//     this.state = {
//       posts: [],
//       currentLocation: {
//         lat: lat,
//         lng: lng
//       }
//     };
//   }

//   // console.log(this.props.postLocation.lat, 'lat?')

//   componentDidMount() {
//     fetch(postsAPI)
//       .then(response => response.json())
//       .then(posts => this.setState({ posts }));
//       console.log(this.props, 'fetch')
//   }

//   recenterMap() {
//     const map = this.map;
//     const current = this.state.currentLocation;

//     const google = this.props.google;
//     const maps = google.maps;

//     if (map) {
//       let center = new maps.LatLng(current.lat, current.lng);
//       map.panTo(center);
//     }
//   }
//   loadMap() {
//     if (this.props && this.props.google) {
//       const { google } = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;

//       const node = ReactDOM.findDOMNode(mapRef);

//       let { zoom } = this.props;
//       const { lat, lng } = this.state.currentLocation;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign(
//         {},
//         {
//           center: center,
//           zoom: zoom
//         }
//       );

//       this.map = new maps.Map(node, mapConfig);
//     }
//   }

//   renderChildren() {
//     const { children } = this.props;

//     if (!children) return;

//     return React.Children.map(children, c => {
//       if (!c) return;
//       return React.cloneElement(c, {
//         map: this.map,
//         google: this.props.google,
//         mapCenter: this.state.currentLocation
//       });
//     });
//   }

//   render() {
//     const style = Object.assign({}, mapStyles.map);
//     return (
//       <div>
//         <div style={style} ref="map">
//           Loading map...
//         </div>
//         {this.renderChildren()}
//       </div>
//     );
//   }

//   async componentDidMount() {
//     console.log("props:", this.props)
//     setTimeout(() => {
//       console.log("props:", this.props)
      
//     }, 2000)
//     if (this.props.centerAroundCurrentLocation) {
//       if (navigator && navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(pos => {
//           const coords = pos.coords;
//           console.log("coords", pos.coords);
//           this.setState({
//             currentLocation: {
//               lat: coords.latitude,
//               lng: coords.longitude
//             }
//           });
//         });
//       }
//     }

//     // else {
//     //   console.log("inelseblock")
//     //   // else if you don't want map to be centered around current loc, then update lat/lng according to what was returned in props in map container
//     //   if (navigator && navigator.geolocation) {
//     //     navigator.geolocation.getCurrentPosition(pos => {
//     //       const coords = this.props.postLocation;
//     //       this.setState({
//     //         currentLocation: {
//     //           lat: coords.latitude,
//     //           //posts.location ?
//     //           lng: coords.longitude
//     //         }
//     //       });
//     //     });
//     //   }
//     // }
//     this.loadMap();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//     if (prevState.currentLocation !== this.state.currentLocation) {
//       this.recenterMap();
//     }
//   }
// }

// export default CurrentLocation;

// CurrentLocation.defaultProps = {
//   zoom: 14,
//   initialCenter: {
//     lat: -1.2884,
//     lng: 36.8233
//     // lat: this.props.postLocation.lat,
//     // lng: this.props.postLocation.lng
//   },
//   centerAroundCurrentLocation: false,
//   visible: true
// };

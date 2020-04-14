
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  state = { 
    lat: "", 
    lng: ""
  }

    static defaultProps = {
      center: {
        lat: 40.75,
        lng: -74.00
      },
      zoom: 13
    };

    
 componentDidMount() {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.postLocation}&sensor=true&key=AIzaSyDSAux7_3LvqlxXll6VChWmPuS8aMYl3IA`
      )
    .then(resp => resp.json())
    .then( data => {
      this.setState({
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      })
    })
}
   
  render() {
  
    return (

      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyDSAux7_3LvqlxXll6VChWmPuS8aMYl3IA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        > 
        {this.state.lat && this.state.lng ?
          <AnyReactComponent
            lat={parseFloat(this.state.lat)}
            lng={parseFloat(this.state.lng)}
            text="Here!"
          /> : null }
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;


import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = process.env.REACT_APP_API_KEY

class SimpleMap extends Component {

  state = { 
    lat: "", 
    lng: ""
  }

    static defaultProps = {
      center: {
        lat: 40,
        lng: 74
      },
      zoom: 15
    };

    
 componentDidMount() {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.postLocation}&sensor=true&key=${API_KEY}`
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
    console.log(API_KEY, 'api key')
    return (

      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          center={this.state}
          defaultZoom={this.props.zoom}
        > 
        {this.state.lat && this.state.lng ?
          <AnyReactComponent
            lat={parseFloat(this.state.lat)}
            lng={parseFloat(this.state.lng)}
            text="I'M HERE"
          /> : null }
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

import React from "react";

class MapContainer2 extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    userAddress: null
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  getCoordinates = position => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    this.reverseGeocodeCoords()
  };

  reverseGeocodeCoords = () => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&censor=false&key=AIzaSyDSAux7_3LvqlxXll6VChWmPuS8aMYl3IA`)
      .then(res => res.json)
      .then(data => 
        this.setState({
            // userAddress: data.results[0].formatted_address
        }))
  }

  render() {
    
    return (
      <div>
        <button onClick={this.getLocation}>Click for coords</button>
        <p>{this.state.latitude}</p>
        <p>{this.state.longitude}</p>
        <p>{this.state.userAddress}</p>
        {this.state.latitude && this.state.longitude ? (
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=146&size=400x300&sensor=false&markers=color:red&7C${this.state.latitude},${this.state.longitude}&key=AIzaSyDSAux7_3LvqlxXll6VChWmPuS8aMYl3IA`}
            alt="map of pick up location"
          />
        ) : null}
      </div>
    );
  }
}

export default MapContainer2;

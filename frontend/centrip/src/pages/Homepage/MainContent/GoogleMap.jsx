import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapPinStart from '../../../ImageAssets/pin.png';
import MapPinEnd from '../../../ImageAssets/pin2.png';

const StartAnyReactComponent = ({ text }) => <div><img src={MapPinStart} style={{height: "30px", width: "30px", transform: "translate(-15px, -15px)"}}></img></div>;
const EndAnyReactComponent = ({ text }) => <div><img src={MapPinEnd} style={{height: "30px", width: "30px", transform: "translate(-15px, -15px)"}}></img></div>;



class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.879007,
      lng: 151.2051831,
    },
    zoom: 12
  };

  

  render() {
    const apiIsLoaded = (map, maps) => {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        const origin = { lat: -33.879007, lng: 151.2051831 };
        const destination = { lat: -33.889007, lng: 151.2251831 };
  
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            // DRIVING, BICYCLING, TRANSIT, WALKING
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
              console.log(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDOfn3Dk7W6Xrae1nPf7fNITiyJvtUQCXQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        >
          <StartAnyReactComponent
            lat={-33.879007}
            lng={151.2051831}
            text={'A'}
          />
          <EndAnyReactComponent
            lat={-33.889007}
            lng={151.2251831}
            text={'B'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
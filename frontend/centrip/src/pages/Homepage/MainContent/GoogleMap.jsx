import React, { Component, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { observer } from 'mobx-react';
import MapPinStart from '../../../ImageAssets/pin.png';
import MapPinEnd from '../../../ImageAssets/pin2.png';

const StartAnyReactComponent = ({ text }) => <div><img src={MapPinStart} style={{height: "30px", width: "30px", transform: "translate(-15px, -15px)"}}></img></div>;
const EndAnyReactComponent = ({ text }) => <div><img src={MapPinEnd} style={{height: "30px", width: "30px", transform: "translate(-15px, -15px)"}}></img></div>;

const GoogleMap = observer(({ store }) => {


    const apiIsLoaded = (map, maps) => {
        console.log("heheherere");
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
            travelMode: window.google.maps.TravelMode.TRANSIT,
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

    const defaultProps = {
        center: {
          lat: -33.879007,
          lng: 151.2051831,
        },
        zoom: 12
      };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDOfn3Dk7W6Xrae1nPf7fNITiyJvtUQCXQ" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={(store.startStatus == false && store.endStatus == false) ? ({ map, maps }) => apiIsLoaded(map, maps) : console.log("ll")}
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
  )
});

export default GoogleMap

// @observer
// class GoogleMap extends Component {

//   static defaultProps = {
//     center: {
//       lat: -33.879007,
//       lng: 151.2051831,
//     },
//     zoom: 12
//   };

//   render = () => {
//       observer(this.props.store);
//       console.log("hi", this.props.store.curLong);

//       const dp = {
//         center: {
//             lat: this.props.store.curLat,
//             lng: this.props.store.curLong,
//           },
//           zoom: 12
//       };
    // const apiIsLoaded = (map, maps) => {
    //     const directionsService = new window.google.maps.DirectionsService();
    //     const directionsRenderer = new window.google.maps.DirectionsRenderer();
    //     directionsRenderer.setMap(map);
    //     const origin = { lat: -33.879007, lng: 151.2051831 };
    //     const destination = { lat: -33.889007, lng: 151.2251831 };
  
    //     directionsService.route(
    //       {
    //         origin: origin,
    //         destination: destination,
    //         // DRIVING, BICYCLING, TRANSIT, WALKING
    //         travelMode: window.google.maps.TravelMode.TRANSIT,
    //       },
    //       (result, status) => {
    //         if (status === window.google.maps.DirectionsStatus.OK) {
    //           directionsRenderer.setDirections(result);
    //           console.log(result);
    //         } else {
    //           console.error(`error fetching directions ${result}`);
    //         }
    //       }
    //     );
    //   };
//     return (
//       // Important! Always set the container height explicitly
    //   <div style={{ height: '100vh', width: '100%' }}>
    //     <GoogleMapReact
    //       bootstrapURLKeys={{ key: "AIzaSyDOfn3Dk7W6Xrae1nPf7fNITiyJvtUQCXQ" }}
    //       defaultCenter={dp.center}
    //       defaultZoom={dp.zoom}
        //   yesIWantToUseGoogleMapApiInternals
        //     onGoogleApiLoaded={this.props.store.startStatus == false && this.props.store.endStatus == false ? ({ map, maps }) => apiIsLoaded(map, maps) : console.log("ll")}
        // >
    //       <StartAnyReactComponent
    //         lat={-33.879007}
    //         lng={151.2051831}
    //         text={'A'}
    //       />
    //       <EndAnyReactComponent
    //         lat={-33.889007}
    //         lng={151.2251831}
    //         text={'B'}
    //       />
    //     </GoogleMapReact>
    //   </div>
//     );
//   }
// }

// export default GoogleMap;
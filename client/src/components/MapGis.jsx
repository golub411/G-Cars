import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 55.795622,
      lng: 37.541347
    },
    zoom: 17
  };
  let height = '400px'
  let width = '600px'
  if(windowInnerWidth <= 425 & windowInnerWidth > 375){
    width = '400px'
    height = '250px'
  }
  if(windowInnerWidth <= 375 & windowInnerWidth > 320){
    width = '360px'
    height = '210px'
  }
  if(windowInnerWidth <= 320){
    width = '300px'
    height = '200px'
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: height, width: width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={55.795622}
          lng={37.541347}
          text="G CARS"
        />
      </GoogleMapReact>
    </div>
  );
}
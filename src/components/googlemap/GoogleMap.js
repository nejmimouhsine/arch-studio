import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ text }) => {
    return (
        <section className='map'>
            <div className='container map_container'>
                {text}
            </div>
        </section>
    )
}

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
   
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width:'80%', margin: '0 auto 100px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCjFlG7JPGpEUMvIGQS1h6JYTM8hFnRYl4' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <GoogleMap
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
  }
   
export default SimpleMap;
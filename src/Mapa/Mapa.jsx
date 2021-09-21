import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import './mapa.css'

const OPTIONS = {
    center: {
        lat: 45,
        lng: 10
    },
    zoom: 4
}
const mapStyles = {
    width: '100%',
    height: 'calc(100% - 10em)'
};

const API_CONFIG = {
    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    language: 'es'
}

export class Mapa extends Component{
    
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},//Shows the infoWindow to the selected place upon a marker
        covidData: []
    };

    onMarkerClick = (props, marker, e) =>{
        this.setState({
            selectedPlace: props.data,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    };

    componentDidMount(){
        fetch("https://covid19.mathdro.id/api/confirmed/")
        .then(res => res.json())
        .then(data => this.setState({covidData: data}))
    }

    render(){

        return(
            <div className="map-container">
                <Map
                    google={this.props.google}
                    zoom={OPTIONS.zoom}
                    style={mapStyles}
                    initialCenter={OPTIONS.center}
                >
                    {this.state.covidData.length > 0 && this.state.covidData.map((item, index) => {
                        return (
                            <Marker 
                            key={`Marker${index}`}
                            data={item}
                            onClick={this.onMarkerClick} 
                            position={{lat: item.lat, lng: item.long}}
                            icon={'./virus.png'}
                            />
                        )
                    })}
                    <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                        <div className="info-window">
                            Confirmados: {this.state.selectedPlace.confirmed}<br />
                            Muertos: {this.state.selectedPlace.deaths}<br />
                            Recuperados: {this.state.selectedPlace.recovered}<br />
                            <sm>fuente: <a target="_blank" href="https://www.who.int/" rel="noopener noreferrer">World Health Organization</a></sm>
                        </div>                    
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: API_CONFIG.key
  })(Mapa);



// componentDidMount(){
//     loadGoogleMapsAPI( API_CONFIG )
//     .then( googleMaps => {
//         const map = new googleMaps.Map( this.refs.map, OPTIONS )
//         new googleMaps.Marker({
//             position: {
//             lat: 39,
//             lng: 0
//             },
//             map: map,
//             icon: './virus.png'
//         });
//     })
    // .then( googleMaps => {
    //     fetch("https://covid19.mathdro.id/api/confirmed/")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         data.forEach(item =>{      
    //         const marker = new googleMaps.Marker({
    //             position: {
    //             lat: item.lat,
    //             lng: item.long
    //             },
    //             map: this.refs.map,
    //             icon: './virus.png'
    //         });
    //         marker.addListener('click', () => {
    //             new googleMaps.InfoWindow({
    //             position: {
    //                 lat: item.lat,
    //                 lng: item.long
    //             },  
    //             content: 
    //                 `<div className="info-window">
    //                 Confirmados: ${item.confirmed}<br>
    //                 Muertos: ${item.deaths}<br>
    //                 Recuperados: ${item.recovered}
    //                 </div>`,
    //             map: this.refs.map
    //             })
    //         })
    //         })
    //     })
    // })
//     .catch( err => {
//         console.log( 'No se pudo cargar el mapa', err );
//     });
// }

// var map
// function initMap(){
    //     map = new googleMaps.Map(document.getElementById('map'), {
        //         center: {
            //         lat: 39,
            //         lng: -0.17
            //         },
            //         zoom: 3
            //     });
            
            //     fetch("https://covid19.mathdro.id/api/countries/")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    
    // }
    
    // initMap()
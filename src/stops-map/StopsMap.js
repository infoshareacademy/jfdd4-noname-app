
import React from 'react'
import GoogleMap from 'google-map-react'
import Stop from './stop-place/Stop'
import data from '../data/data.js';


export default  class StopsMap extends React.Component {
    constructor() {
        super();

        this.state = {
            stops: [],
        }
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })

    }

    componentWillMount() {
        this.setState({
            stops: data.stops
        })
    }


    render() {
        return (
            <div>
        <div style={{width: '1100px', height: '500px'}}>
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={[54.357267, 18.682472]}
                zoom={12}>
                              {this.state.stops.map(function (stops) {
                    return <Stop lat={stops.cox} lng={stops.coy} text={'A'}/>
                })}
            </GoogleMap>
        </div>
                </div>)
    }
}
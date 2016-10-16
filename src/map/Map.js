
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'

export default  class Map extends React.Component {
    render() {
        return <div style={{width: '300px', height: '300px'}}>
            {this.props.x} {this.props.y}
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={[54.357267, 18.682472]}
                zoom={15}>
                <Place lat={this.props.x} lng={this.props.y} text={'A'}/>
            </GoogleMap>
        </div>
    }
}
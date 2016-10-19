import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'

export default  class Map extends React.Component {
    render() {
        return <div style={{width: '100%', height: '300px'}}>
            {this.props.x} {this.props.y}
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={[this.props.x, this.props.y]}
                zoom={15}>
                <Place lat={this.props.x} lng={this.props.y} text={'A'}/>
            </GoogleMap>
        </div>
    }
}
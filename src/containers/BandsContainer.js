import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'


class BandsContainer extends Component {
//   renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)
  
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.addBand
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({type: "ADD_BAND", payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
import React from 'react'

const Bands = props => {
    console.log(props)
    let bands = [];
    if (props.bands && props.bands.map) {
        bands = props.bands.map((band, index) => {
            return (
                <li key={index}>{band.name}</li>
            )
        })
    }

    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands;

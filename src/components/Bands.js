import React from 'react'

const Bands = props => {
    console.log(props)
    // short circuit rendering -- waiting until props.bands has a value then it will be able to map -- due to asynchronous behavior
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

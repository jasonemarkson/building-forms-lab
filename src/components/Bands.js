import React from 'react'

const Bands = props => {
    props.bands.map((band, index) => {
        return (
            <li key={index}>{band}</li>
        )
    })

    return (
        <div>
            {Bands}
        </div>
    )
}

export default Bands;

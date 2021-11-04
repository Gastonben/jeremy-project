import React from 'react'
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({title, hours, lasthours}) => {

    return (
        <div className="card-container">
            <div className="card-small">
                <div className="card-main">
                    <h3 className="card-title">{title}</h3>
                    <img src="" alt="" className="card-image" />
                </div>
                <div className="card-details">
                    <p className="card-currentTime">{hours}</p>
                    <p className="card-previousTime">{lasthours}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    hours: PropTypes.string,
    lasthours: PropTypes.string,
}

export default Card

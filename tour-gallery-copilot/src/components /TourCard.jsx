// Basic TourCard component to display and remove tours
import React from 'react';

// Component that shows tour details and handles removal
function TourCard({ tour, onRemove }) {
    const { id, name, info, image, price } = tour;

    return (
        <div className="tour-card">
            {/* Tour image */}
            <img src={image} alt={name} className="tour-card-img" />

            {/* Tour name */}
            <h3 className="tour-card-title">{name}</h3>

            {/* Tour description */}
            <p className="tour-card-info">{info}</p>

            {/* Tour price */}
            <p className="tour-card-price">Price: ${price}</p>

            {/* Remove tour button */}
            <button className="not-interested-button" onClick={() => onRemove(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default TourCard;

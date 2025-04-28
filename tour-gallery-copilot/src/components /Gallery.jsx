// Component responsible for rendering a collection of tour cards

// Import React for component creation
import React from 'react';

// Import TourCard component for individual tour rendering
import TourCard from './TourCard';

// Gallery component accepts tours array and onRemove callback as props
function Gallery({ tours, onRemove }) {
    return (
        // Main gallery container
        <div className="gallery">
            
            {/* Iterate through tours array to create individual tour cards */}
            {tours.map((tour) => (
                <TourCard 
                    
                    // React requires unique key for list items
                    key={tour.id} 
                    
                    // Tour data object
                    tour={tour} 
                    
                    // Callback function for tour deletion
                    onRemove={onRemove} 
                />
            ))}
        </div>
    );
}

// Make Gallery component available for import
export default Gallery;

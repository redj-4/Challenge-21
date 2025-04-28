// Task 1 - Setup tour data fetching logic with useEffect and state
import React, { useState, useEffect } from 'react';
import Gallery from './components /Gallery';
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);
//state to manage tours
  const [loading, setLoading] = useState(true);
//state to manage loading state
  const [error, setError] = useState(null);
//state to manage error state
  const fetchTours = async () => {
    //fetch tours from API
    setLoading(true);

    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');

      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }

      const data = await response.json();

      setTours(data);

      setError(null);
    
    } catch (err) {
      setError(err.message);
    
    } finally {
      setLoading(false);
    }
  };//fetchTours function to fetch tours from API

  useEffect(() => {
    fetchTours();
  }, []);
//useEffect to fetch tours on component mount
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Task 4 - Add conditional rendering for loading and error states
  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Task 5 - Add refresh button to reload tours when the list is empty
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No Tours Left</h2> 
        
        {/* Button to refresh the tour list */}
        <button className="refresh-button" onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }
// Main component rendering the title and gallery
  return (
    <div>
      <h1>Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}
export default App; //export the App component
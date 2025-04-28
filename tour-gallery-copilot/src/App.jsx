// Import necessary dependencies from React
import React, { useState, useEffect } from 'react';
// Import styles
import './styles/styles.css';

// Main App component
function App() {
  // State to store the list of tours fetched from the API
  const [tours, setTours] = useState([]);

  // State to manage the loading state while fetching data
  const [loading, setLoading] = useState(true);

  // State to store any error messages during the data fetching process
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    
    // Set loading to true to indicate data fetching is in progress
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
  };

  
  useEffect(() => {
    fetchTours();
  }, []);

  
  const removeTour = (id) => {
   
    setTours(tours.filter((tour) => tour.id !== id));
  };
}

export default App;
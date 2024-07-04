import React, { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import RecentU from '../components/RecentU/RecentU';

const Home = () => {
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    fetch('http://your-backend-api/recent-data')
      .then(response => response.json())
      .then(data => setRecentData(data))
      .catch(error => console.error('Error fetching recent data:', error));
  }, []);

  return (
    <div>
      <Hero />
      <RecentU data={recentData} />
    </div>
  );
}

export default Home;

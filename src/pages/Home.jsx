import React from 'react';
import Products from './Products'; // Adjust the path based on where your Product component is located
import Header from '../components/Header';

function Home() {
  return (
    <div className="container mx-auto">
      <Products />
    </div>
  );
}

export default Home;

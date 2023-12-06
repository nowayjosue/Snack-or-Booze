import React from 'react';

const Home = () => {
  // Fetch and calculate the number of snacks and drinks
  const numSnacks = /* Fetch and calculate */;
  const numDrinks = /* Fetch and calculate */;

  return (
    <div>
      <h2>Welcome to Snack or Booze!</h2>
      <p>Snacks available: {numSnacks}</p>
      <p>Drinks available: {numDrinks}</p>
    </div>
  );
};

export default Home;
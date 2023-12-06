import React from 'react';

const FoodMenu = ({ type }) => {
  // Fetch and display the list of snacks or drinks based on 'type'
  const menuItems = /* Fetch menu items based on 'type' */;

  return (
    <div>
      <h2>{type === 'snacks' ? 'Snack Menu' : 'Drink Menu'}</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={`/menu/${type}/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodMenu;
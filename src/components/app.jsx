import React from 'react';
import CityList from '../containers/city_list.jsx';
import ActiveCity from '../containers/active_city.jsx';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;

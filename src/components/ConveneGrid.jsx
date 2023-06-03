import React from 'react';
import ConvenesCard from './ConvenesCard';


const ConvenesGrid = ({ convenes }) => {

  console.log(convenes);
  return (
    <div className="convene_grid">
      {convenes.map((convene) => (
        <ConvenesCard key={convene.id} {...convene} />
      ))}
    </div>
  );
};

export default ConvenesGrid;

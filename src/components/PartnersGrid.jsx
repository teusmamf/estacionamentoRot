import React from 'react';
import PartnerCard from './Partners';


const PartnersGrid = ({ partners }) => {

  
  return (
    <div className="partners_grid">
      {partners.map((Partner) => (
        <PartnerCard key={Partner.id} {...Partner} />
      ))}
    </div>
  );
};

export default PartnersGrid;

import React from 'react';
import Card from './companies';


const CompanyGrid = ({ companies }) => {

  console.log(companies);
  return (
    <div className="company_grid">
      {companies.map((company) => (
        <Card key={company.id} {...company} />
      ))}
    </div>
  );
};

export default CompanyGrid;

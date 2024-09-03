import React from 'react';

const PricingPackage = ({ grade, price, details }) => {
  return (
    <div className="pricing-package">
      <div className="price">
        <img src="https://estafeed.com/wp-content/uploads/2024/01/ALevel-Biology-1170x560-1.jpg" alt="price tag" />
      </div>
      <h3>{grade}</h3>
      <ul className="details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button className="subscribe-btn">{price}</button>
    </div>
  );
};

export default PricingPackage;

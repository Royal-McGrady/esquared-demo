// src/components/RunwayCard.js
import React from 'react';
import CardComponent from '../../../components/Card';

const RunwayCard = () => (
  <CardComponent
    title="Runway"
    value="18 Months"
    subtitle="Based on Current Burn Rate"
    isPositive={true}
  />
);

export default RunwayCard;
// src/components/UserGrowthCard.js
import React from 'react';
import CardComponent from '../../../components/Card';

const UserGrowthCard = () => (
  <CardComponent
    title="User Growth"
    value="+15%"
    subtitle="Last 30 Days"
    isPositive={true}
  />
);

export default UserGrowthCard;
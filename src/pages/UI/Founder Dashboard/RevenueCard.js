// src/components/RevenueCard.js
import React from 'react';
import CardComponent from '../../../components/Card';

const RevenueCard = () => (
  <CardComponent
    title="Revenue"
    value="R150,000"
    subtitle="Last Month"
    isPositive={true}
  />
);

export default RevenueCard;
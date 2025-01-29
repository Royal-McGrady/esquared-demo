// src/components/FundingStatusCard.js
import React from 'react';
import CardComponent from '../../../components/Card';

const FundingStatusCard = () => (
  <CardComponent
    title="Funding Status"
    value="$500,000"
    subtitle="Total Funding Received"
    isPositive={true}
  />
);

export default FundingStatusCard;
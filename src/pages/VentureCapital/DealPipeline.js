import React from "react";
import CardComponent from '../../components/Card';

const DealPipeline = ({ deals }) => {
  const stages = [
    "Awareness",
    "New Opportunity",
    "Introduced",
    "First Meeting",
    "Shareholder Meeting",
    "Legal",
    "Closed",
    "On Hold",
    "Declined",
    "IPO",
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Deal Pipeline</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stages.map((stage) => (
          <CardComponent key={stage} title={stage}>
            <ul className="space-y-2">
              {deals
                .filter((deal) => deal.status === stage)
                .map((deal) => (
                  <li
                    key={deal.id}
                    className="bg-gray-100 p-2 rounded-md shadow-sm hover:bg-gray-200"
                  >
                    {deal.company}
                  </li>
                ))}
            </ul>
          </CardComponent>
        ))}
      </div>
    </div>
  );
};

export default DealPipeline;

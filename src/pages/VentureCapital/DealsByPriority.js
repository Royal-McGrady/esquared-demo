import React from "react";
import CardComponent from '../../components/Card';


const DealsByPriority = ({ deals }) => {
  const priorities = ["Urgent", "High", "Normal", "Low"];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Deals by Priority</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {priorities.map((priority) => (
          <CardComponent key={priority} title={priority}>
            <ul className="space-y-2">
              {deals
                .filter((deal) => deal.priority === priority)
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

export default DealsByPriority;

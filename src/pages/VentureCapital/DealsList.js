import React from "react";

const DealsList = ({ deals }) => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">List of Deals</h2>
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Company</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Priority</th>
            <th className="px-4 py-2 border">First Meeting</th>
            <th className="px-4 py-2 border">Next Step</th>
            <th className="px-4 py-2 border">Contact</th>
            <th className="px-4 py-2 border">Attachment</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{deal.company}</td>
              <td className="px-4 py-2 border">{deal.status}</td>
              <td className="px-4 py-2 border">{deal.priority}</td>
              <td className="px-4 py-2 border">{deal.firstMeeting}</td>
              <td className="px-4 py-2 border">{deal.nextStep}</td>
              <td className="px-4 py-2 border">{deal.contact}</td>
              <td className="px-4 py-2 border">{deal.attachment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DealsList;

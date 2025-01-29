import React from "react";
import dealsData from "./Data/DealsData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./UI/tabs";
import DealPipeline from "./VentureCapital/DealPipeline";
import DealsByPriority from "./VentureCapital/DealsByPriority";
import DealsList from "./VentureCapital/DealsList";

const DealsPage = () => {
  const deals = dealsData;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Deals Management</h1>
      <Tabs defaultValue="list">
        <TabsList className="flex justify-center mb-8">
          <TabsTrigger value="list">List of Deals</TabsTrigger>
          <TabsTrigger value="priority">Deals by Priority</TabsTrigger>
          <TabsTrigger value="pipeline">Deal Pipeline</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <DealsList deals={deals} />
        </TabsContent>

        <TabsContent value="priority">
          <DealsByPriority deals={deals} />
        </TabsContent>

        <TabsContent value="pipeline">
          <DealPipeline deals={deals} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DealsPage;



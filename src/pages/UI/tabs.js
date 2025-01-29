import React from "react";

// Tabs component manages the selectedTab state
export const Tabs = ({ children, defaultValue }) => {
    const [selectedTab, setSelectedTab] = React.useState(defaultValue);

  // Pass selectedTab and setSelectedTab to child components (TabsList, TabsTrigger, etc.)
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          selectedTab,
          setSelectedTab, // Pass setSelectedTab to the children
        })
      )}
    </div>
  );
};

// TabsList component: wraps the TabsTrigger buttons
export const TabsList = ({ children, className }) => (
  <div className={`flex gap-4 ${className}`}>{children}</div>
);

// TabsTrigger component: button that switches tabs
export const TabsTrigger = ({ value, children, selectedTab, setSelectedTab }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors duration-200 ${
        selectedTab === value ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
      onClick={() => setSelectedTab(value)} // This should update the selected tab
    >
      {children}
    </button>
  );
};

// TabsContent component: Displays content for the selected tab
export const TabsContent = ({ value, children, selectedTab }) => (
  <div hidden={selectedTab !== value} className="p-4">
    {selectedTab === value && children}
  </div>
);

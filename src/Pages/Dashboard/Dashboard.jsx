import React from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import DashScreen from './DashScreen';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardLayout>
        <div className="flex-grow">
          <DashScreen />
        </div>
      </DashboardLayout>

      {/* Footer Section */}
      <div className="text-center py-4 bg-white w-full">
        <h1 className="text-md text-gray-400">© 2025 QueryLens AI. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Dashboard;

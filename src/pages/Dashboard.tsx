
import React from 'react';
import Header from '@/components/Header';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <DashboardOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

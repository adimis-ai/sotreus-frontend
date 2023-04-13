// Dashboard.tsx
import React from 'react';
import { ClientContainer } from '../components/Dashboard/clientContainer';
import { GET_CLIENT } from '../modules/sampleData';
import Header from '../components/Header';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className='mt-10'></div>
      <ClientContainer clients={GET_CLIENT.clients} />
    </div>
  );
};

export default Dashboard;

// Dashboard.tsx
import React from 'react';
import { ClientContainer } from '../components/Dashboard/clientContainer';
import { GET_CLIENT } from '../modules/sampleData';

const Dashboard: React.FC = () => {
  return (
    <div className='bg-black'>
      <ClientContainer clients={GET_CLIENT.clients} />
    </div>
  );
};

export default Dashboard;

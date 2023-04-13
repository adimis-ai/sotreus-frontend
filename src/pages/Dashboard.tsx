// Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { ClientContainer } from '../components/Dashboard/clientContainer';
import { Client } from '../components/Dashboard/types';
import { getClients } from '../modules/api'; 

import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomLoader from "../components/CustomLoader";

const Dashboard: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      const clientData = await getClients();
      setClients(clientData.clients);
      setIsLoading(false);
    }

    fetchClients();
  }, []);

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div>
      <Header />
      <div className="mt-10"></div>
      <ClientContainer clients={clients} />
      <Footer />
    </div>
  );
};

export default Dashboard;

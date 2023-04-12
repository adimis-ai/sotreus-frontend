import { useState } from 'react';
import { ClientCard } from './clientCard';
import { ClientList } from './clientList';
import { Client } from './types';
import { motion } from 'framer-motion';
import AddClient from './addClient';

interface ClientContainerProps {
  clients: Client[];
}

export const ClientContainer: React.FC<ClientContainerProps> = ({ clients }) => {
  const [card, setCard] = useState(true);

  const renderCards = () => {
    return clients.map((client, index) => (
      <motion.div key={index} className="py-2 flex">
        <ClientCard client={client} />
      </motion.div>
    ));
  };

  return (
<>
  <motion.div
    className="container mx-auto px-4 py-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {card ? (
      <>
        <div className='flex justify-between'>
          <button
            className="bg-gradient-to-br bg-black border border-blue-300 text-white px-6 py-2 rounded-lg shadow-lg transition-all hover:from-blue-300 hover:to-blue-200 hover:text-black hover:border-black mb-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setCard(false)}
          >
            List View
          </button>

          <button
            className="bg-gradient-to-br bg-black border border-blue-300 text-white px-6 py-2 rounded-lg shadow-lg transition-all hover:from-blue-300 hover:to-blue-200 hover:text-black hover:border-black mb-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <AddClient/>
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderCards()}
        </motion.div>
      </>
    ) : (
      <>
        <div className='flex justify-between'>
          <button
            className="bg-gradient-to-br bg-black border border-blue-300 text-white px-6 py-2 rounded-lg shadow-lg transition-all hover:from-blue-300 hover:to-blue-200 hover:text-black hover:border-black mb-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setCard(true)}
          >
            List View
          </button>

          <button
            className="bg-gradient-to-br bg-black border border-blue-300 text-white px-6 py-2 rounded-lg shadow-lg transition-all hover:from-blue-300 hover:to-blue-200 hover:text-black hover:border-black mb-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Client
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ClientList clients={clients} />
        </motion.div>
      </>
    )}
  </motion.div>
</>
  );
};

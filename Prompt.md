Please using Tailwind CSS improve the UI/UX Of the following `react-typescript` components as described below.
- Make every component responsive for all 3 small, medium, large devices.
- The clientCard.tsx should be have a gradient look.
- The clientList.tsx should be table with all the columns and row.

## [clientContainer.tsx]:
// clientContainer.tsx
import React from 'react';
import { ClientCard } from './clientCard';
import { ClientList } from './clientList';
import { Client } from './types';

interface ClientContainerProps {
  clients: Client[];
  card: boolean;
}

export const ClientContainer: React.FC<ClientContainerProps> = ({ clients, card }) => {
  const renderClients = () => {
    if (card) {
      return clients.map((client, index) => <ClientCard key={index} client={client} />);
    } else {
      return <ClientList clients={clients} />;
    }
  };

  return (
    <div className=''>
      {renderClients()}
    </div>
  );
};

## [clientList.tsx]:
// clientList.tsx
import React from 'react';
import { Client } from './types';

interface ClientListProps {
  clients: Client[];
}

export const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <div className="">

    </div>
 );
};

## [clientCard.tsx]:
// clientCard.tsx
import React from 'react';
import { Client } from './types';

interface ClientCardProps {
  client: Client;
}

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="">
      {/*Top left corner of the card*/}
      <div className="">
        <button className="">Delete</button>
        <button className="">Edit</button>
      </div>
      {/*Right side of the card*/}
      <div className="">
        <div className="">{client.Name}</div>
        <div className="">{client.Email}</div>
        <div className="">Tags: {client.Tags.join(', ')}</div>
        <div className="">Status: {client.Enable ? 'Enabled' : 'Disabled'}</div>
        <div className="">Created: {new Date(client.Created).toLocaleDateString()}</div>
        <div className="">Updated: {new Date(client.Updated).toLocaleDateString()}</div>
      </div>
      {/*Bottom of the card*/}
      <div>
        <button className="">Enable/Disable</button>
        <button className="">Config</button>
        <button className="">Email</button>
        <button className="">QR Code</button>
      </div>
    </div>
  );
};

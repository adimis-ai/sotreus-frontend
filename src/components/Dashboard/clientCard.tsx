import React from 'react';
import { Client } from './types';
import { motion } from 'framer-motion';
import QrCode from './QrCode';
import { emailClientConfig, getClientConfig, deleteClient } from '../../modules/index';
import { saveAs } from 'file-saver';
import { HiOutlineMail, HiOutlineTag, HiOutlineSwitchHorizontal, HiOutlineCalendar, HiOutlineRefresh } from 'react-icons/hi';

import ClientEdit from './clientEdit';
import { MdDelete } from 'react-icons/md';

interface ClientCardProps {
  client: Client;
}

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {

  const handleEmail = async (clientId:string) => {
    try {
      const response = await emailClientConfig(clientId)

      if (!response) {
        throw new Error('No response from server');
      }

    } catch (error) {
      console.error('Error sending email to client:', error);
    }
  }

  const handleDelete = async (clientId:string) => {
    try {
      const response = await deleteClient(clientId)

      if (!response) {
        throw new Error('No response from server');
      }

    } catch (error) {
      console.error('Error deleting client:', error);
    }
  }


  const handleDownload = async (clientId: string) => {
    try {
      console.log("Downloading client config...", clientId);
      const response = await getClientConfig(clientId);
      
      if (!response) {
        throw new Error('No response from server');
      }
  
      const configText = response.data;
      const blob = new Blob([configText], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `${clientId}_config.conf`);
    } catch (error) {
      console.error('Error downloading client config:', error);
    }
  };

  const handleClientAccess = async (clientId: string) => {
    // Update the client access using Patch Endpoint
    console.log("Client Access", clientId);
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full p-5 bg-gradient-to-br from-black via-blue-900 to-black shadow-xl shadow-blue-400/30 bg-center bg-cover rounded-lg shadow-md">
        <motion.div
          className="flex flex-col h-full justify-between"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Top left corner of the card */}
          <div className="flex justify-between">
            <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-2">
              <ClientEdit client={client}/>
            </button>
            <button onClick={() => handleDelete(client.UUID)} className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-2">
              <MdDelete />
            </button>
          </div>
          {/* Right side of the card */}
          <div className="text-white mt-6">
            <div className="text-3xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-200 to-blue-500 font-bold mb-4">{client.Name}</div>
            <div className="flex items-center">
              <HiOutlineMail className="mr-2" />
              <div>{client.Email}</div>
            </div>
            <div className="flex items-center mt-2">
              <HiOutlineTag className="mr-2" />
              <div>Tags: {client.Tags.join(', ')}</div>
            </div>
            <div className="flex items-center mt-2">
              <HiOutlineSwitchHorizontal className="mr-2" />
              <div>Status: {client.Enable ? 'Enabled' : 'Disabled'}</div>
            </div>
            <div className="flex items-center mt-2">
              <HiOutlineCalendar className="mr-2" />
              <div>Created: {new Date(client.Created).toLocaleDateString()}</div>
            </div>
            <div className="flex items-center mt-2">
              <HiOutlineRefresh className="mr-2" />
              <div>Updated: {new Date(client.Updated).toLocaleDateString()}</div>
            </div>
          </div>
          {/* Bottom of the card */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-center">
            <button onClick={() => handleClientAccess(client.UUID)} className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-2">{client.Enable ? 'Disable Client' : 'Enable Client'}</button>
            <button onClick={() => handleEmail(client.UUID)} className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-2">Email Client</button>
            <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-2">
              <QrCode privateKey={client.PrivateKey}/>
            </div>
            <button onClick={() => handleDownload(client.UUID)} className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-2">Download</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

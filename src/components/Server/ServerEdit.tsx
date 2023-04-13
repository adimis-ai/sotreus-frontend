// ServerEdit.tsx

import React, { useState } from 'react';
import { updateServer } from '../../modules/api';

interface ServerEditProps {
  data: any;
  edit: boolean;
}

export const ServerEdit: React.FC<ServerEditProps> = ({ data, edit }) => {
  const [address, setAddress] = useState(data.address[0]);
  const [listenPort, setListenPort] = useState(data.listenPort);
  const [dns, setDns] = useState(data.dns.join(', '));
  const [persistentKeepalive, setPersistentKeepalive] = useState(data.persistentKeepalive);

  const handleEditServer = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dnsArray = dns.split(',').map((ip: string) => ip.trim());

    const updatedServerConfig = {
      ...data,
      address: [address],
      listenPort: listenPort,
      dns: dnsArray,
      persistentKeepalive: persistentKeepalive,
    };

    try {
      const response = await updateServer(updatedServerConfig);
      console.log('Server updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating server:', error);
    }
  };

  return (

    <div>
      <label htmlFor="server-edit" className='bg-gradient-to-br bg-black border border-blue-300 text-white px-8 py-3 rounded-lg shadow-lg transition-all hover:from-blue-300 hover:to-blue-200 hover:text-black hover:border-black mb-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Edit</label>
      <input type="checkbox" id="server-edit" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
          <label htmlFor="server-edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-3xl text-blue-200 font-bold">Edit Server Configuration</h3>
          <div>
            <form onSubmit={handleEditServer}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-blue-100 text-md text-left my-3 font-semibold">
                    Address
                  </label>
                  <input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input input-bordered w-full max-w-x"
                  />
                </div>
                <div>
                  <label htmlFor="listenPort" className="block text-blue-100 text-md text-left my-3 font-semibold">
                    Listen Port
                  </label>
                  <input
                    id="listenPort"
                    value={listenPort}
                    onChange={(e) => setListenPort(parseInt(e.target.value))}
                    className="input input-bordered w-full max-w-x"
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="dns" className="block text-blue-100 text-md text-left my-3 font-semibold">
                    DNS (comma-separated)
                  </label>
                  <input
                    id="dns"
                    value={dns}
                    onChange={(e) => setDns(e.target.value)}
                    className="input input-bordered w-full max-w-x"
                  />
                </div>
                <div>
                  <label htmlFor="persistentKeepalive" className="block text-blue-100 text-md text-left my-3 font-semibold">
                    Persistent Keepalive
                  </label>
                  <input
                    id="persistentKeepalive"
                    value={persistentKeepalive}
                    onChange={(e) => setPersistentKeepalive(parseInt(e.target.value))}
                    className="input input-bordered w-full max-w-x"
                    type="number"
                  />
                </div>
              </div>
              <button type="submit" className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-3 px-5 mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default ServerEdit;

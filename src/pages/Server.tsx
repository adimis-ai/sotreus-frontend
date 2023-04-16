import React, { useState, useEffect } from "react";
import CustomCard from "../components/Server/CustomCard";
import CustomLoader from "../components/CustomLoader";
import { getStatus, getServerInfo, getServerConfig } from "../modules/api";
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { saveAs } from 'file-saver';
import ServerEdit from "../components/Server/ServerEdit";

const ServerPage: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [serverInfo, setServerInfo] = useState<any>(null);
  const [serverConfig, setServerConfig] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = async () => {
    try {
      const config = serverConfig;
      const blob = new Blob([config], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `server_config.txt`);
    } catch (error) {
      console.error('Error downloading server config:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statusData = await getStatus();
        setStatus(statusData);
        const serverInfoData = await getServerInfo();
        console.log("serverInfoData", serverInfoData)
        setServerInfo(serverInfoData.server); 
        console.log("serverInfo", serverInfoData.data)
        const serverConfigData = await getServerConfig();
        setServerConfig(serverConfigData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <>
      <Header />
        <motion.div
          className="container mx-auto px-8 py-8 border border-blue-200 rounded-xl shadow-xl shadow-blue-300/30 bg-gray-800 bg-opacity-40 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        <div className="container mx-auto px-4">

          <div className='flex justify-between'>
            <button 
              onClick={() => handleDownload()}
              className="bg-gradient-to-br bg-black border border-blue-300 text-white px-6 py-2 rounded-lg shadow-lg transition-all hover:from-blue-300 hover:to-blue-200 hover:text-black hover:border-black mb-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Download Config
            </button>
            <div className="px-6 py-2 rounded-lg shadow-lg transition-all mb-10 border border-black bg-blue-300 text-black hover:bg-black hover:border-blue-300 hover:text-blue-200">
              <ServerEdit/>
            </div>
          </div>

          <div className="mb-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-100 to-blue-200 font-bold text-2xl md:text-3xl mb-4 mt-8">Server Status</h1>
            {status && <CustomCard data={status} edit={false}/>}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-100 to-blue-200 font-bold text-2xl md:text-3xl mb-4 mt-8">Server Information</h1>
            {serverInfo && <CustomCard data={serverInfo} edit={false}/>}
          </div>

        </div>
        </motion.div>
      <Footer />
    </>
  );
};

export default ServerPage;
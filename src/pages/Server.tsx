import React, { useState, useEffect } from "react";
import CustomCard from "../components/Server/CustomCard";
import CustomLoader from "../components/Server/CustomLoader";
import { getStatus, getServerInfo, getServerConfig } from "../modules/api";
import { motion } from 'framer-motion';
import Header from '../components/Header';

const ServerPage: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [serverInfo, setServerInfo] = useState<any>(null);
  const [serverConfig, setServerConfig] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statusData = await getStatus();
        setStatus(statusData);
        const serverInfoData = await getServerInfo();
        setServerInfo(serverInfoData);
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

          <div className="mt-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-100 to-blue-200 font-bold text-2xl md:text-3xl mb-4">Server Configuration</h1>
            {serverConfig && <CustomCard data={serverConfig} edit={true}/>}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-100 to-blue-200 font-bold text-2xl md:text-3xl mb-4 mt-8">Server Status</h1>
            {status && <CustomCard data={status} edit={false}/>}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-100 to-blue-200 font-bold text-2xl md:text-3xl mb-4 mt-8">Server Information</h1>
            {serverInfo && <CustomCard data={serverInfo} edit={false}/>}
          </div>

        </div>
        </motion.div>
    </>
  );
};

export default ServerPage;
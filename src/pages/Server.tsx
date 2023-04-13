import React from 'react'
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Server = () => {
  return (
    <>
      <Header />
      <motion.div
        className="glass container mx-auto px-4 py-8 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        SERVER PAGE
      </motion.div>
    </>
  )
}

export default Server

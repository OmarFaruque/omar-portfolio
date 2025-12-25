'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <motion.div
      className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Image
        src="/Omar-Faruque1.png"
        alt="Your Name"
        width={320}
        height={320}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
};

export default ProfileImage;

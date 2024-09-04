import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FullPageBanner.css';

const FullPageBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 23,
    minutes: 53,
    seconds: 7,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              } else {
                clearInterval(timer);
                // Redirect handled in handleButtonClick
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    // Disable scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      clearInterval(timer);
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleButtonClick = () => {
    window.location.href = 'https://ampm.onrender.com/';
  };

  const flipVariants = {
    enter: {
      rotateX: -90,
      opacity: 0,
    },
    center: {
      rotateX: 0,
      opacity: 1,
    },
    exit: {
      rotateX: 90,
      opacity: 0,
    },
  };

  return (
    <motion.div 
      className="full-page-banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="logo-container"
        >
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gericht.fea86d187b7658ddbb59-n8mExpcbvEy3r4cfzmTP1o0HKoedDW.png"
            alt="AM | PM Lounge Logo"
            width={200}
            height={200}
            className="mx-auto logo-image"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.div>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          Grand Opening!
        </motion.h1>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          Welcome to AM | PM Lounge
        </motion.p>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        >
          Northern Bypass, Thome, After Windsor
        </motion.p>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          +254 700-116-190
        </motion.p>
        <motion.div 
          className="countdown"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit} className="countdown-item">
              <div className="countdown-value-container">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={value}
                    className="countdown-value"
                    variants={flipVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      rotateX: { type: "spring", stiffness: 200, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                  >
                    {value}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="countdown-unit">{unit.toUpperCase()}</div>
            </div>
          ))}
        </motion.div>
        <motion.button
          onClick={handleButtonClick}
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,0)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        >
          Can't Wait! Take Me to the Site
        </motion.button>
      </motion.div>
      <div className="specks-container">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="speck"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 3.33 + 3.33,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FullPageBanner;
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Home from '../components/home';

export const Route = createFileRoute('/')({
  component: Index,
});

const waveVariants = {
  wave: {
    opacity: [0, 1, 0.5, 1, 0],
    scale: [1, 1.1, 1, 1.05, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

const waterDropVariants = {
  drop: {
    scale: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0],
    transition: {
      duration: 1,
      ease: "easeOut",
      repeat: 0,
    }
  }
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 11, duration: 1 } },
};

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleWave, setIsVisibleWave] = useState(false);
  const [isBentoShow, setBentoShow] = useState(false);
  const [isNotVisible, setNotVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    const timeoutId1 = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    const timeoutId2 = setTimeout(() => {
      setIsVisibleTwo(true);
    }, 3000);
    const timeoutId3 = setTimeout(() => {
      setIsVisibleTwo(false);
    }, 5000);
    const timeoutId4 = setTimeout(() => {
      setIsVisibleWave(true);
    }, 6000);
    setTimeout(() => {
      setNotVisible(false);
    }, 7000);
    const timeoutId5 = setTimeout(() => {
      setBentoShow(true);
    }, 7000);



    return () => 
      clearTimeout(timeoutId);
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  return (
    <>
      <div className='bg-[#ECE8E1]'>
        {isBentoShow &&
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pageVariants}>
          {/* <BentoLayout /> */}
          <Home/>
        </motion.div>
        }
        {isNotVisible &&
          <div className="flex items-center justify-center mt-[15rem]">
          <div className={`transition-opacity duration-1000 ease-in-out relative w-full h-full flex flex-col items-center justify-center`}>
          <div className='font-poppins tracking-wider font-semibold z-10 text-center mb-[15rem]'>
                <p className={`transition-opacity duration-1000 ease-in-out text-black font-bold text-[54px] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>Opportunity knocks only once</p>
                <p className={`transition-opacity duration-1000 ease-in-out text-black font-bold text-[54px] ${
              isVisibleTwo ? 'opacity-100' : 'opacity-0'
            }`}>it's now or never.</p>
            </div>
            {isVisibleWave && (
              <>
                <motion.div
                  className="absolute mb-64 rounded-full shadow-inner-custom-two w-[50rem] h-[50rem] border-26 border-[#ECE8E1]"
                  initial="hidden"
                  animate="drop"
                  variants={waterDropVariants}
                />
                <motion.div
                  className="absolute mb-64 rounded-full shadow-inner-custom-two w-[42rem] h-[42rem] border-26 border-[#ECE8E1]"
                  initial="hidden"
                  animate="drop"
                  variants={waterDropVariants}
                />
                <motion.div
                  className="absolute mb-64 rounded-full shadow-inner-custom-two w-[35rem] h-[35rem] border-26 border-[#ECE8E1]"
                  initial="hidden"
                  animate="drop"
                  variants={waterDropVariants}
                />
                <motion.div
                  className="absolute mb-60 rounded-full shadow-inner-custom-two w-[26rem] h-[26rem] border-26 border-[#ECE8E1]"
                  initial="hidden"
                  animate="drop"
                  variants={waterDropVariants}
                />
                <motion.div
                  className="absolute mb-60 rounded-full shadow-inner-custom-two w-[18rem] h-[18rem] border-26 border-[#ECE8E1]"
                  initial="hidden"
                  animate="drop"
                  variants={waterDropVariants}
                />
                <motion.div
                  className="absolute mb-60 rounded-full shadow-inner-custom-two w-[10rem] h-[10rem] border-26 border-[#ECE8E1]"
                  initial="hidden"
                  animate="drop"
                  variants={waterDropVariants}
                />
                <motion.div 
                  className="transition-opacity duration-2000 ease-in-out absolute mb-60 rounded-r-[30%] rounded-t-[80%] rounded-l-[80%] shadow-inner-custom-two w-[2rem] h-[2rem] border-2 border-[#ECE8E1]"
                  initial="hidden"
                  animate="drop"
                  variants={waterDropVariants}
                />
              </>
            )}
          </div>
        </div>
        }
      </div>
    </>
  );
}

export default Index;

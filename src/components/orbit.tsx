import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord, FaGlobe, FaPhone } from 'react-icons/fa';
import Particles from '@/components/ui/particles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function OrbitingIcons() {
  const fadeInVariants = (delay: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: delay, ease: "easeInOut" }
    }
  });

  const icons = [
    { icon: <FaGithub />, key: 'github' },
    { icon: <FaLinkedin />, key: 'linkedin' },
    { icon: <FaEnvelope />, key: 'email' },
    { icon: <FaDiscord />, key: 'discord' },
    { icon: <FaGlobe />, key: 'globe' },
    { icon: <FaPhone />, key: 'phone' },
  ];

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 100,
        ease: 'linear'
      }
    }
  };

  const icon ={
      light: {
          hidden: {
              pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    },
    dark: {
        hidden: {
            pathLength: 0,
            fill: "rgba(87, 173, 91, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(87, 173, 91, 1)"
        }
    }
  }


  const radius = 200;

  const iconPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <>
    <div className='bg-black text-white text-4xl font-chivo flex items-center justify-center pt-10'>Contact me</div>
    <div className="relative flex items-center justify-center h-screen font-chivo bg-black">
    <div className="relative z-10 flex flex-col items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122" 
      height="100" 
      viewBox="0 0 122 100"
      >
      <g transform="translate(0,100) scale(0.1,-0.1)">
        <motion.path
          d="M 470.5,749.5 C 396.5,749.5 322.5,749.5 248.5,749.5C 165.833,666.167 82.8333,583.167 -0.5,500.5C -0.5,499.5 -0.5,498.5 -0.5,497.5C 82.2988,415.201 164.965,332.701 247.5,250C 321.836,249.167 396.169,249.333 470.5,250.5C 387.833,333.5 305.167,416.5 222.5,499.5C 304.82,582.32 387.32,664.986 470,747.5C 470.464,748.094 470.631,748.761 470.5,749.5 Z" // Third path
          variants={icon.dark}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3 }}
        />
        <motion.path
          d="M 300.5,1000.5 C 442.167,1000.5 583.833,1000.5 725.5,1000.5 C 674.084,947.5834 622.084,895.083 569.5,843 C 534.167,842.333 498.833,842.333 463.5,843 C 408.968,895.367 354.634,947.867 300.5,1000.5 Z" // First path flipped
          variants={icon.light}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4 }}
        />
        <motion.path
          d="M 777.5,1000.5 C 851.5,1000.5 925.5,1000.5 999.5,1000.5 C 999.5,999.833333 999.5,999.166667 999.5,998.5 C 833.368,832.868 667.368,667.035 501.5,501 C 427.167,500.333 352.833,500.333 278.5,501 C 445.035,667.368 611.368,833.868 777.5,1000.5 Z" // Second path flipped
          variants={icon.light}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4.5 }}
        />
        <motion.path
          d="M 712.5,657.5 C 748.168,657.667 783.835,657.5 819.5,657 C 871.5,605 923.5,553 975.5,501 C 833.833,500.333 692.167,500.333 550.5,501 C 604.699,554.034 658.699,605.2 712.5,657.5 Z" // Third path flipped
          variants={icon.light}
          initial="hidden"
          animate="visible"
          transition={{ duration: 5 }}
        />
      </g>
    </svg>
    <motion.div
              initial="hidden"
                animate="visible"
                variants={fadeInVariants(2)}
                >
        <h1 className="text-white font-bold text-[5rem]">dz.dev</h1>
    </motion.div>
    </div>

      <motion.div
        className="absolute rounded-full border border-gray-600 flex items-center justify-center"
        variants={orbitVariants}
        style={{ width: radius * 2, height: radius * 2 }}
        animate="animate"
      >
        {icons.map((item, index) => {
          const { x, y } = iconPosition(index, icons.length);
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              initial="hidden"
                animate="visible"
                variants={fadeInVariants(0.5 + index * 0.1)}
                >
              <motion.div
                whileHover={{ scale: 1.2,  }}
                className="text-white text-5xl"
              >
                {item.icon}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white opacity-0" // Circle effect
                  style={{ 
                    width: '70px',
                    height: '70px',
                    left: '-10px',
                    top: '-10px',
                    boxShadow: '0 0 20px rgba(100, 200, 100, 0.8)',
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />
    </div>
  </>
  );
}

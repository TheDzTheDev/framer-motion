import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import logo from "@/assets/dzlogo.png";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const [rootShow, setRootShow] = useState(false);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRootShow(true);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  return (
    <>
          <div className='p-4 text-lg flex justify-between bg-[#ECE8E1] font-chivo'>
          {rootShow && 
          <motion.div
          initial="hidden"
          animate="visible"
          variants={pageVariants}>
            <div className='flex items-center justify-center gap-[14px] text-[30px]'>
              <img src={logo} className='w-[66px] h-[50px]' />
              <p>dz.dev</p>
            </div>
          </motion.div>
          }    
      {rootShow && (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}>
            <div className='flex gap-[92px] mr-4 mt-4'>
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>{' '}
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
              <Link to="/projects" className="[&.active]:font-bold">
                Projects
              </Link>{' '}
              <Link to="/contact" className="[&.active]:font-bold">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
          </div>
          <hr />
          <div className="bg-[#ECE8E1] min-h-screen flex flex-col">
            <Outlet />
          </div>
    </>
  );
}

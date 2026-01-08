import { motion } from "framer-motion";

import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-5xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='pr-28 md:pr-36 lg:pr-48 pt-4'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Achintha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           I am a Computer science student focusing on full-stack web development and software engineering. <br className='sm:block hidden' />
           Dedicated to creating efficient and user-friendly applications.
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 z-10 pointer-events-none pl-16 lg:pl-24">
        <ComputersCanvas />
      </div>

      <div className='absolute bottom-6 xs:bottom-4 w-full flex justify-center items-center z-0'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-70 hover:opacity-100 transition-opacity'>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
      </div>
    </section>
  );
};

export default Hero;
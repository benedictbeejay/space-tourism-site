import React from 'react'
import { Link } from 'react-router-dom'
import { delay, motion } from 'framer-motion'
import transition from '../transition'



const articleAnimation = {
  initial: {
    opacity: 0,
    // y: "10vw",
  },
  visible: {
    opacity: 1,
    
    transition: {
      delay: 0.7,
      delayChildren: 0.5,
      // duration: 0.5,
      staggerChildren: 0.5, 
    }
  }
}
const item = {
  initial: {
    y: "10vw",
    opacity: 0,  
  },
  visible: {
    y: 0,
    opacity: 1
  }
}
const Home = () => {
  return (
    <div>
      <section className="home px-5 flex flex-col items-center justify-center text-center ">
      
        <motion.div 
        className='overlay flex flex-col md:grid md:grid-cols-2 md:text-left md:m-auto mt-16 md:gap-10 lg:max-w-screen-lg  md:w-3/4 items-center justify-center text-center h-full'>
          <motion.article className=''
          variants={articleAnimation}
          initial="initial"
          animate="visible"
          >
            <motion.h1 className='text-2xl text-gray-400 '
            variants={item}
            >
              SO, YOU WANT TO TRAVEL TO 
              <motion.span className='block text-4xl lg:text-6xl text-white mt-5 mb-10'
              // variants={item}
              >
                SPACE
              </motion.span>
            </motion.h1>
            <motion.p className='text-gray-400'
            variants={item}
            >
              Let's Face it; if you want to go to space, ypu might genuinely go t outer space and not hover kind of on tje edge of it. Well, sit back, and relax because we'll give you a truly out of this world experience!   
            </motion.p>
          </motion.article> 
          
          <motion.article className='mt-20 md:mt-0 '>
            <button className='w-48 h-48 md:ml-40 rounded-full bg-white text-gray-800 uppercase font-semibold text-4xl  animate-pulse'>
              <Link to="/destination">
                Explore
              </Link>
            </button>
          </motion.article>
        </motion.div>
      </section>
    </div>
  )
}

export default transition(Home)

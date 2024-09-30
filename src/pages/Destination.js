import React, {useState} from 'react'
import data from "../starter-code/data.json"
import Moon from "../starter-code/assets/destination/image-moon.png"
import Mars from "../starter-code/assets/destination/image-mars.png"
import Europa from "../starter-code/assets/destination/image-europa.png"
import Titan from "../starter-code/assets/destination/image-titan.png"
import { motion, AnimatePresence } from 'framer-motion'
import transition from '../transition'
// import Moon2 from "../../public/starter-code/assets/destination/image-moon.png"

const { destinations } = data;

const imagePlanet = [Moon, Mars, Europa, Titan]


const destination = {
  initial : {
    x: -1000
  },

  visible: {
    x: -100,
    transition : {
      type: "spring",
      stiffness: "260",
      damping: 20,
      delay: 2.5,
      duration: 1.5,
    }
  }
}

const bodies = {

  hover : {
    rotate: 25,
    transition : {
      duration: 0.5,
      damping: 20,
    }
  },
  // exit : {
  //   x: 1000,
  //   transition: {
  //     duration: 0.5,
  //   }
  // }
}
const articleAnimation = {
  initial: {
    opacity: 0,
    // y: "10vw",
  },
  visible: {
    opacity: 1,
    
    transition: {
      // delay: 0.3,
      delayChildren: 0.5,
      // duration: 0.5,
      staggerChildren: 0.5, 
    }
  }
}

const item = {
  initial: {
    y: 100,
    opacity: 0,  
  },
  visible: {
    y: 0,
    opacity: 1
  }
}




const Destination = () => {
  const [planets] =useState(destinations)
  const [value, setValue] = useState(0)
  const planetImages = imagePlanet[value]

  const {name, images, description, distance, travel} =
  planets[value]
  console.log(images.png);
  // console.log(imagePlanet);
  // console.log(Moon)

  return (
    <>
      <section className='home destination px-5 py-5'> 
        <motion.h1 
        variants={destination}
        initial='initial'
        animate="visible"
        className=' md:absolute lg:left-48  md:left-32 md:pt-28 w-fit md:-translate-x-0 relative left-1/2  -translate-x-1/2 pb-4 lg:mx-auto lg:max-w-7xl text-white text-md  uppercase md:text-2xl  '>
          01 Pick your destination
        </motion.h1>
        <div className='md:top-1/2 relative md:-translate-y-1/2 top-1/3 -translate-y-1/3 md:pt-20 md:grid md:grid-cols-2 md:gap-5 md:items-center lg:max-w-6xl lg:mx-auto'>
         
          <motion.article className=''>
          
            <AnimatePresence>
              <motion.img 
              variants={bodies}
              whileHover="hover"
              whileTap="hover"
              className='block mx-auto md:flex  md:w-2/3 sm:w-1/2 w-2/3 mt-4 mb-4' src={planetImages}  alt={name}  title={name} />
            </AnimatePresence>
                       
          </motion.article>

          <motion.article className='text-center md:text-left md:mt-0 '
          variants={articleAnimation}
          initial='initial'
          animate="visible"
          >

          <motion.div variants={item}>
            
            {planets.map((item, index) => (
              <motion.button key={index} onClick={() => setValue(index)} 
              className={`uppercase text-white sm:text-2xl text-xl pb-1  mx-2 ${index === value && "border-b border-white"}`}>
                {item.name}
              </motion.button>
            ))}
            
          </motion.div>
            

            <motion.h2 variants={item} className='text-3xl md:text-5xl font-bold text-white mt-4 mb-4 md:mx-2 uppercase tracking-widest'>
              {name}
            </motion.h2>
            <motion.p variants={item} className='text-gray-400 md:mx-2 pb-2 md:pb-5'>
              {description}
            </motion.p>
            <motion.ul variants={item} className='md:mx-2 flex items-center justify-between flex-wrap border-t border-gray-400 pt-2 md:pt-5'>
              <li className='text-white md:text-2xl text-xl '>
                <span className='md:text-xl text-lg block'>Avg. Distance</span> {distance}
              </li>
              <li className='text-white md:text-2xl text-xl'>
                <span className='md:text-xl text-lg  block'>Est. Travel Time</span> {travel}
              </li>
            </motion.ul>
          </motion.article>
        </div>
      </section> 
    </>
  )
}
// md:h-2/3 sm:h-1/4 md:items-center md:flex md:justify-center
export default transition(Destination)

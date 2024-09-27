import React, {useState} from 'react'
// import { BsCircle } from 'react-icons/bs'
import data from "../starter-code/data.json"
import Moon from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
import Mars from "../starter-code/assets/technology/image-spaceport-portrait.jpg"
import Europa from "../starter-code/assets/technology/image-space-capsule-portrait.jpg"
import Launch from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
import Spaceport from "../starter-code/assets/technology/image-spaceport-landscape.jpg"
import Capsule from "../starter-code/assets/technology/image-space-capsule-landscape.jpg"
import { motion } from 'framer-motion'
import transition from '../transition'

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

const { technology } = data;

const imagePlanet = [Moon, Mars, Europa]
const Landscape = [Launch, Spaceport, Capsule]

const Technology = () => {
  const [cards] =useState(technology)
  const [value, setValue] = useState(0)
  const planetImages = imagePlanet[value]
  const landscapeImages = Landscape[value]

  const {name, description, images} =
  cards[value]
  console.log(images)
 

  return (
    <>
      <section className='home technology px-5 h-full '>  
        <motion.h1 
        variants={destination}
        initial='initial'
        animate="visible"
        className='md:absolute pt-8 lg:left-56 md:left-40 md:pt-32 relative left-1/2 w-fit -translate-x-1/2  lg:mx-auto lg:max-w-7xl text-white text-lg  uppercase md:text-2xl '>
          02 Space Launch 101
        </motion.h1>
        <div className=' flex items-center justify-center flex-col-reverse top-1/2 md:mt-0 -mt-6 relative -translate-y-1/2 md:pt-20 md:grid md:grid-cols-2 md:gap-5 md:items-center  lg:max-w-6xl lg:mx-auto'>
          <motion.article 
          variants={articleAnimation}
          initial='initial'
          animate="visible"
          className='text-center md:text-left md:mt-0  lg:flex items-center'>
            <motion.div variants={item} className=''>
              {cards.map((item, index) => (
                <motion.button key={index} onClick={() => setValue(index)} 

                className={`uppercase text-white sm:text-2xl text-xl h-12 w-12 p-1 border-2 border-white rounded-full pb-2 m-2 mx-2 
                ${index === value && "bg-white text-gray-900"}`}>
                {index + 1}
                </motion.button>
              ))}
            </motion.div>

           <motion.div variants={item} className='lg:ml-10 '>
            <motion.h4 variants={item} className='uppercase text-gray-400 md:text-2xl  mx-2 md:mb-4 text-lg'>The terminology...</motion.h4>
            <motion.h2 variants={item} className='text-3xl md:text-3xl font-bold text-white mt- mb-4 md:mx-2 uppercase tracking-widest'>
              {name}
            </motion.h2>
            <motion.p variants={item} className='text-gray-400 md:mx-2 pb-2 md:pb-5'>
              {description}
            </motion.p>

           </motion.div>
          </motion.article> 

            <article className=''>
            <img className=' mx-auto md:flex h-1/3 md:w-2/3 w-3/5' src={planetImages}  alt={name}  title={name} />           
            {/* <picture>
              <source media='(min-width: 768px)' srcSet={planetImages}/>
              <img src={landscapeImages} alt={name} className='block mx-auto mb-10 md:flex md:h-1/3 md:w-2/3 '/>
            </picture> */}
          </article>
         
        </div>
      </section> 
    </>
  )
}

export default transition(Technology)

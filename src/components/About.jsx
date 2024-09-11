import AboutImg from "../assets/about.png"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">About Me
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={AboutImg} alt="About Image" className="w-80 h-80 rounded-2xl"/>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{x: 100, opacity: 0}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">
                    I am Neeshan Ismath, a passionate Software Engineer with a focus on <br/>full-stack development 
                    and innovative technology solutions. With a solid foundation in programming languages like C, Java,
                    and Python, as well as expertise in web development using frameworks such as React, Django, and Node js.
                    I thrive in creating intuitive, user-friendly applications. My experience includes leading projects 
                    such as a natural language-based data visualization tool showcasing my ability to tackle diverse challenges.
                    I am always eager to learn, grow, and apply my skills to make meaningful contributions
                    in collaborative environments.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
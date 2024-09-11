import ProfilePic from "../assets/dp.png";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0, 
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
    
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                        Neeshan Ismath
                    </motion.h1>

                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl
                    tracking-tight text-transparent">
                        Software Engineer
                    </motion.span>

                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter"> 
                        Hello! I'm Neeshan Ismath, a dedicated Software Engineer with a passion for building 
                        innovative and efficient solutions. 
                        With a solid foundation in full-stack development,<br />
                        I excel in crafting seamless user experiences.<br />
                        My expertise spans a range of technologies, 
                        from web frameworks to database management, 
                        and I'm always eager to learn and apply the latest tools in the industry.<br />
                        Let's collaborate to bring ideas to life!
                    </motion.p>

                    <div className="flex justify-center mt-8">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={e => {}}
                            onHoverEnd={e => {}}
                            href="https://drive.google.com/file/d/1TjA6z4VVJkNaapjKO1mj4xC7FalroDb5/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-5 bg-purple-800 hover:bg-purple-600 text-white hover:text-neutral-900 font-bold py-2 px-4 rounded"
                        >
                            Resume
                        </motion.a>
                    </div>


                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img src={ProfilePic} alt="Profile Picture" 
                    className="w-100 h-100 rounded-full border-4 border-purple-700 object-cover"
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.5}}
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
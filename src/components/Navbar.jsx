import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-24 h-24"/>
    </div>
    <div className="m-8 flex items-center jusitfy-center gap-4 text-2xl">
      <motion.a
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        href="https://www.linkedin.com/in/neeshan-ismath-131282290/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}} href="https://github.com/neeshan-ibn-ismath" target="_blank" rel="noopener noreferrer">
          <FaGithub />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}} href="https://www.facebook.com/neeshan.binismath" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}} href="https://www.instagram.com/neeshan_bin_ismath/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
      </motion.a>
    </div>
  </nav>
  
}

export default Navbar
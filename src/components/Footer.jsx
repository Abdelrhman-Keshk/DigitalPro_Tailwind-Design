import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram  } from "react-icons/fa6";
import Contact from './Contact.jsx'
function Footer() {
  return (
    <footer className="bg-gray-900 divide-y divide-gray-800">
      <Contact/>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">&copy; 2024 DigitalPro. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-xl">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram  />
            </a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
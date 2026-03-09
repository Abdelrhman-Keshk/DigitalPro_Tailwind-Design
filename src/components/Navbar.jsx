import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
				<div className="container px-4 py-4 mx-auto">
					<div className="flex justify-between items-center">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<span className="font-bold text-3xl text-blue-600">DigitalPro</span>
							<span className="hidden sm:inline bg-blue-100 rounded-2xl py-1 px-2 text-xs text-blue-600">
								Marketing Agency
							</span>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex space-x-8">
							<a href="#home" className="font-medium text-gray-700 hover:text-blue-600 transition">Home</a>
							<a href="#services" className="font-medium text-gray-700 hover:text-blue-600 transition">Services</a>
							<a href="#our-work" className="font-medium text-gray-700 hover:text-blue-600 transition">Our Work</a>
							<a href="#our-team" className="font-medium text-gray-700 hover:text-blue-600 transition">Our Team</a>
							<a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 transition">Contact Us</a>
						</div>

						{/* Right Side: CTA + Mobile Toggle */}
						<div className="flex items-center gap-4">
							<button 
                className="
                  hidden sm:block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg
                  cursor-pointer hover:bg-blue-700 transition-all duration-300
                "
            >
								Get a Consultation
							</button>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="md:hidden text-2xl text-gray-700 cursor-pointer"
							>
								{isOpen ? <FaXmark /> : <FaBars />}
							</button>
						</div>
					</div>

					{/* Mobile Menu (Dropdown) */}
					<div className={`
            		md:hidden overflow-hidden transition-all duration-300
            		${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          		`}
          >
						<div className="flex flex-col space-y-4 pb-4">
							<a href="#home" onClick={() => setIsOpen(false)} className="font-medium text-gray-700 hover:text-blue-600">Home</a>
							<a href="#services" onClick={() => setIsOpen(false)} className="font-medium text-gray-700 hover:text-blue-600">Services</a>
							<a href="#our-work" onClick={() => setIsOpen(false)} className="font-medium text-gray-700 hover:text-blue-600">Our Work</a>
							<a href="#our-team" onClick={() => setIsOpen(false)} className="font-medium text-gray-700 hover:text-blue-600">Our Team</a>
							<a href="#contact" onClick={() => setIsOpen(false)} className="font-medium text-gray-700 hover:text-blue-600">Contact Us</a>
							<button
								className="
                	sm:hidden  bg-blue-600 text-white font-medium py-2 px-6 rounded-lg 
                	cursor-pointer shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300
               "
						  >
								Get a Consultation
							</button>
						</div>
					</div>
				</div>
			</nav>
			<div className="h-20"></div>
		</>
	);
}

export default Navbar;
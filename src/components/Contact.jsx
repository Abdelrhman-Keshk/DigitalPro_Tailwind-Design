import { FaLocationDot, FaPhone, FaEnvelope, FaMap } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contact">
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h2 className="font-bold text-2xl mb-6">Contact Us</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name"
                className="
                  w-full bg-gray-700 p-4 border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-4 focus:ring-blue-400 placeholder-gray-400
                "
              />
              <input type="email" placeholder="Email Address"
                className="
                  w-full bg-gray-700 p-4 border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-4 focus:ring-blue-400 placeholder-gray-400
                "
              />
              <textarea placeholder="Your Message..." rows="5"
                className="
                  w-full bg-gray-700 p-4 border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-4 focus:ring-blue-400 placeholder-gray-400
                "
              ></textarea>
              <button type="submit"
                className="
                  w-full bg-blue-600 p-4 font-medium cursor-pointer rounded-lg
                   hover:bg-blue-700 transition duration-300
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info & Map placeholder */}
          <div className="space-y-8">
            <h2 className="font-bold text-2xl">Contact Information</h2>
            {/* info items */}
            <div className="space-y-4">
              {/* info item-1 */}
              <div className="flex items-center gap-4">
                {/* info icon */}
                <div className="size-12 bg-blue-600/20 text-blue-500 text-xl rounded-lg flex justify-center items-center">
                  <FaLocationDot />
                </div>
                {/* info text */}
                <div>
                  <span className="text-sm text-gray-400">Address</span>
                  <p className="font-medium">Cairo, Egypt</p>
                </div>
              </div>
              {/* info item-2 */}
              <div className="flex items-center gap-4">
                {/* info icon */}
                <div className="size-12 bg-blue-600/20 text-blue-500 text-xl rounded-lg flex justify-center items-center">
                  <FaPhone />
                </div>
                {/* info text */}
                <div>
                  <span className="text-sm text-gray-400">Phone</span>
                  <p className="font-medium">+20 123 456 7890</p>
                </div>
              </div>
              {/* info item-3 */}
              <div className="flex items-center gap-4">
                {/* info icon */}
                <div className="size-12 bg-blue-600/20 text-blue-500 text-xl rounded-lg flex justify-center items-center">
                  <FaEnvelope />
                </div>
                {/* info text */}
                <div>
                  <span className="text-sm text-gray-400">Email</span>
                  <p className="font-medium">info@digitalpro.com</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl h-50 mt-8 overflow-hidden">
              <div
                className="
                  size-full bg-linear-to-br from-blue-900 to-purple-900
                  flex justify-center items-center gap-2 text-gray-400
                "
              >
                <FaMap className="text-4xl opacity-50" />
                <span>Site Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
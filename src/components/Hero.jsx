import { FaCheck, FaPlay, FaChartLine, FaUsers, } from "react-icons/fa6";

function Hero() {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center" id="home">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="font-bold text-4xl md:text-6xl text-gray-900">
              We Create <span className="text-blue-600">Digital Success</span> for Your Brand
            </h1>
            <p className="text-gray-700 text-xl leading-relaxed">
              We provide integrated marketing solutions that help your company grow and increase sales through innovative strategies.
            </p>
            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700">+500 Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700">Professional Team</span>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                className="
                  shadow-lg cursor-pointer hover:bg-blue-700 hover:shadow-2xl transition-all duration-300
                  bg-blue-600 text-white py-4 px-8 font-semibold text-lg rounded-xl
                  focus:ring-4 focus:ring-blue-300
                "
              >
                Start Your Journey Now
              </button>
              <button
                className="
                  flex items-center gap-2 text-gray-700 font-semibold
                  text-lg border-2 border-gray-300 py-4 px-8 rounded-xl
                  hover:border-blue-600 hover:text-blue-600
                  transition-all duration-300 cursor-pointer
                "
              >
                <FaPlay />Watch the Video
              </button>
            </div>

          </div>
          {/* The Image */}
          <div className="relative">
            <div className="w-full h-96 bg-linear-to-br from-blue-400 to-purple-400 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-10 right-10 size-20 bg-white/20 rounded-full backdrop-blur"></div>
              <div className="absolute bottom-10 left-10 size-32 bg-white/20 rounded-full backdrop-blur"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FaChartLine className="text-white/50 text-8xl " />
              </div>
            </div>
            {/*The Card over the Image */}
            <div className="flex items-center absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 gap-3">
              <div className=" size-12 bg-green-100 flex justify-center items-center rounded-full">
                <FaUsers className="text-green-600 text-2xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Happy Clients</p>
                <p className="font-bold text-2xl">+500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { FaCircleUser, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const teamData = [
  {
    id: 1,
    gradiant: "from-blue-400 to-purple-400",
    colors: ["text-blue-600", "bg-blue-600/80", "hover:bg-blue-100"],
    name: "Ahmed Mohamed",
    job: "Marketing Director",
    description: "10 years of experience in digital marketing"
  },
  {
    id: 2,
    gradiant: "from-purple-400 to-pink-400",
    colors: ["text-purple-600", "bg-purple-600/80", "hover:bg-purple-100"],
    name: "Sara Ahmed",
    job: "SEO Specialist",
    description: "Specialized in search engine optimization"
  },
  {
    id: 3,
    gradiant: "from-green-400 to-blue-400",
    colors: ["text-green-600", "bg-green-600/80", "hover:bg-green-100"],
    name: "Mohamed Ali",
    job: "Web Developer",
    description: "Expert in web development"
  },
  {
    id: 4,
    gradiant: "from-yellow-400 to-orange-400",
    colors: ["text-yellow-600", "bg-yellow-600/80", "hover:bg-yellow-100"],
    name: "Noura Khaled",
    job: "Graphic Designer",
    description: "Specialized in visual identity design"
  },
];

function Team() {
  return (
    <section className="py-16" id="our-team">
      <div className="container mx-auto px-4">
        {/* Team Title */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl text-gray-900 font-bold mt-10">Our Creative Team</h1>
          <p className="text-lg text-gray-600">
            An elite group of the best digital marketing experts.
          </p>
        </div>
        {/* Services items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden text-center 
                shadow-md hover:shadow-2xl transition-shadow duration-300 group
              "
            >
              <div className="relative overflow-hidden h-64">
                {/* Member Image */}
                <div
                  className={`
                    size-full bg-linear-to-br ${member.gradiant} 
                    flex justify-center items-center text-white text-8xl
                  `}
                >
                  <FaCircleUser />
                </div>
                {/* overflow */}
                <div
                  className={`
                    absolute inset-0 ${member.colors[1]} opacity-0 group-hover:opacity-100
                    transition-all duration-300 flex justify-center items-center ${member.colors[0]} gap-4
                  `}
                >
                  <a href="#" className={`size-10 bg-white rounded-full flex justify-center items-center cursor-pointer ${member.colors[2]}`}>
                    <FaFacebookF />
                  </a>
                  <a href="#" className={`size-10 bg-white rounded-full flex justify-center items-center cursor-pointer ${member.colors[2]}`}>
                    <FaTwitter />
                  </a>
                  <a href="#" className={`size-10 bg-white rounded-full flex justify-center items-center cursor-pointer ${member.colors[2]}`}>
                    <FaLinkedinIn />
                  </a>

                </div>
              </div>
              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className={`${member.colors[0]}`}>{member.job}</p>
                <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
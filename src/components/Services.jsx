import { FaChartLine, FaCheck, FaFacebook, FaCode } from "react-icons/fa6";

const servicesData = [
  {
    id: 1,
    icon: FaChartLine,
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
    iconBgHover: "group-hover:bg-blue-600",
    title: "Search Engine Optimization",
    description: "We ensure your website appears on the first pages of search engines and increases qualified visitors.",
    features: [
      "Keyword Analysis",
      "Content Optimization",
      "Link Building"
    ]
  },
  {
    id: 2,
    icon: FaFacebook,
    iconColor: "text-purple-600",
    iconBgColor: "bg-purple-100",
    iconBgHover: "group-hover:bg-purple-600",
    title: "Social Media Marketing",
    description: "We manage your advertising campaigns on Facebook and Instagram with high professionalism.",
    features: [
      "Precise Targeting",
      "Results Analysis",
      "Campaign Optimization"
    ]
  },
  {
    id: 3,
    icon: FaCode,
    iconColor: "text-green-600",
    iconBgColor: "bg-green-100",
    iconBgHover: "group-hover:bg-green-600",
    title: "Website Design & Development",
    description: "We design professional websites that are compatible with all devices.",
    features: [
      "Responsive Design",
      "High Speed",
      "Easy Management"
    ]
  },
];

function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">

        {/* Services Title */}
        <div className="space-y-2 md:space-y-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold mt-10">Our Integrated Services</h1>
          <p className="text-xs sm:text-md md:text-lg text-gray-600">
            We offer a comprehensive range of digital solutions to grow your business.
          </p>
          <div className="w-25 h-1 bg-blue-600 rounded-2xl mx-auto" />
        </div>
        {/* Services items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {servicesData.map((service) => (
            <div key={service.id}
              className="
                p-8 border border-gray-200 rounded-2xl space-y-4
                hover:border-blue-600 hover:shadow-2xl transition duration-300 group
              "
            >
              {/* Service icon */}
              <div
                className={`
                  w-16 h-16 flex items-center justify-center rounded-xl ${service.iconBgColor} 
                  ${service.iconBgHover} transition duration-300
                `}
              >
                <service.icon className={`text-3xl ${service.iconColor} group-hover:text-white transition duration-300`} />
              </div>
              {/* Service text */}
              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
              {/* Service features */}
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
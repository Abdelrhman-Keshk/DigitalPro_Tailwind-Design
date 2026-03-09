
const ourWorkData = [

  {
    id: 1,
    count: "+500",
    title: "Clients Worldwide"
  },
  {
    id: 2,
    count: "+1000",
    title: "Projects Completed"
  },
  {
    id: 3,
    count: "+50",
    title: "Marketing Experts"
  },
  {
    id: 4,
    count: "+10",
    title: "Years of Experience"
  },
]

function OurWork() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-purple-600 py-20 relative overflow-hidden" id="our-work">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 size-64 bg-white/10 rounded-full -translate-1/2" />
      <div className="absolute bottom-0 right-0 size-96 bg-white/10 rounded-full translate-1/2" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ourWorkData.map((item) => (
            <div key={item.id} className="text-center space-y-3">
              <div className="font-bold text-4xl md:text-6xl text-white">{item.count}</div>
              <div className="text-blue-100 text-lg md:text-xl">{item.title}</div>
            </div >
          ))}
        </div>
      </div>
    </section >
  )
}

export default OurWork
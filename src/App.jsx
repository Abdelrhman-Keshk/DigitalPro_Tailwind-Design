import { Navbar, Hero, Services, OurWork, Team, Footer } from "./components"

export default function App() {
  return (
    <div className="App bg-gray-50 min-h-screen box-border">
      <Navbar/>
      <Hero/>
      <Services/>
      <OurWork/>
      <Team/>
      <Footer/>
    </div>
  )
}

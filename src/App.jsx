import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Info from './components/Info'
import MapSection from './components/MapSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Menu />
      <Info />
      <MapSection />
      <Contact />
      <Footer />
    </div>
  )
}

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DemoCta from './components/DemoCta.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import CloudPhone from './pages/products/CloudPhone.jsx'
import AiReceptionist from './pages/products/AiReceptionist.jsx'
import SmsMms from './pages/products/SmsMms.jsx'
import VideoMeetings from './pages/products/VideoMeetings.jsx'
import Solutions from './pages/Solutions.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/cloud-phone" element={<CloudPhone />} />
          <Route path="/products/ai-receptionist" element={<AiReceptionist />} />
          <Route path="/products/sms-mms" element={<SmsMms />} />
          <Route path="/products/video-meetings" element={<VideoMeetings />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <DemoCta />
      <Footer />
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import NavbarSectionTwo from './components/ui/navbar-section-2.jsx'
import Footer from './components/Footer.jsx'
import DemoCta from './components/DemoCta.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Features from './pages/Features.jsx'
import Industries from './pages/Industries.jsx'
import Pricing from './pages/Pricing.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Faq from './pages/Faq.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <div style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <NavbarSectionTwo />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <DemoCta />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App

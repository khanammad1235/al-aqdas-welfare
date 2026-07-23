import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Activities from './pages/Activities'
import Appeal from './pages/Appeal'
import Gallery from './pages/Gallery'
import Media from './pages/Media'
import Donation from './pages/Donation'
import Contact from './pages/Contact'
import Documents from './pages/Documents'
import TopBar from './components/TopBar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/appeal" element={<Appeal />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media" element={<Media />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

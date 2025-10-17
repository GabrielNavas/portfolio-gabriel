import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import ResumePage from "./pages/Resume.jsx"

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash)
  React.useEffect(() => {
    const fn = () => setHash(window.location.hash)
    window.addEventListener("hashchange", fn)
    return () => window.removeEventListener("hashchange", fn)
  }, [])
  return hash.replace(/^#\/?/, "")
}

export default function App() {
  const route = useHashRoute()
  const isResume = route === "curriculo"
  return (
    <div className="gradient">
      <Navbar />
      <main>
        {isResume ? (
          <ResumePage />
        ) : (
          <>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
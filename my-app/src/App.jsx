import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Education } from "@/sections/Education"
import { Projects } from "@/sections/Projects"
import { CaseStudies } from "@/sections/CaseStudies"
import { Certificates } from "@/sections/Certificates"
import { Contact } from "@/sections/Contact"

function App() {
  
  return (
       <div className="min-h-screen overflow-x-hidden">
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        <main id="main">
          <Hero/>
          <About/>
          <Education/>
          <Projects/>
          <CaseStudies/>
          <Certificates/>
          <Contact/>

        </main>
       </div>
  )
}

export default App

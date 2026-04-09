import { useEffect, useRef, useState } from "react"
import CommentQ from "./component/CommentQ"
import ElegantStylish from "./component/ElegantStylish"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Photo from "./component/Photo"
import Plan from "./component/Plan"
import Services from "./component/Services"
import Software from "./component/Software"
import Subscribe from "./component/Subscribe"
function App() {
  const sectionRefs = useRef([])
  useEffect(function () {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = "translateY(0px)"
        }
      })
    }, {
      threshold: 0.3
    })
    sectionRefs.current.forEach(function(section){
      observer.observe(section)
    })
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <Software />
      <Services data={sectionRefs} />
      <ElegantStylish data={sectionRefs} />
      <Plan data={sectionRefs} />
      <Photo data={sectionRefs} />
      <CommentQ data={sectionRefs} />
      <Subscribe data={sectionRefs} />
      <Footer data={sectionRefs} />
    </>
  )
}
export default App

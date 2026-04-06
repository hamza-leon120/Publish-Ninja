import CommentQ from "./component/CommentQ"
import ElegantStylish from "./component/ElegantStylish"
import Footer from "./component/footer"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Photo from "./component/Photo"
import Plan from "./component/Plan"
import Services from "./component/Services"
import Software from "./component/Software"
import Subscribe from "./component/Subscribe"
function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Software/>
      <Services />
      <ElegantStylish />
      <Plan />
      <Photo />
      <CommentQ />
      <Subscribe />
      <Footer />
    </>
  )
}
export default App

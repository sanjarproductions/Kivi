import './App.css'
import Nav from "./components/nav/Nav"
import Hero from "./components/hero/Hero"
import Slider from "./components/slider/Slider"
import Expertice from "./components/expertice/Expertice"
import CaseStudy from "./components/casestudy/CaseStudy"
import Payment from "./components/payment/Payment"
import FreeProduct from "./components/freeproduct/FreeProduct"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Slider></Slider>
      <Expertice></Expertice>
      <CaseStudy></CaseStudy>
      <Payment></Payment>
      <FreeProduct></FreeProduct>
      <Slider></Slider>
      <Footer></Footer>
    </>
  )
}

export default App

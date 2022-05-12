
// import './App.css';
import Header from '../src/Component/HeaderCompnt/Header.jsx'
import Nav from '../src/Component/NavComponent/Nav.jsx'
import About from '../src/Component/About/About.jsx'
import Experience from '../src/Component/ExperienceCompnt/Experience.jsx'
import Service from '../src/Component/ServicesPages/Service.jsx'
import Portfolio from '../src/Component/PortfolioPages/Portfolio.jsx'
// import Testimonial from '../src/Component/TestimonialComp/Testimonials.jsx'
import Contact from '../src/Component/Contact Compnt/Contact.jsx'
import Footer from './Component/FooterComp/Footer.jsx'
import Testimonials from './Component/TestimonialComp/Testtimonials.jsx'
function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience/>
     <Service />
     <Portfolio />
     <Testimonials/>
     {/* <Testimonial /> */}
     <Contact/>
     <Footer/>
     
     
    </>
  );
}

export default App;

import Banner from './components/layout/banner/Banner';
import Nav from './components/layout/nav/Nav';
import Profile from './components/layout/profile/Profile';
import Work from './components/layout/work/Work'
import Contact from './components/layout/contact/Contact';
import './App.css';
import Footer from './components/layout/footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Scrollpop from './components/layout/scrollpop/Scrollpop';
AOS.init();

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Profile />
      <Work />
      <Contact />
      <Footer />
      <Scrollpop />
    </div>
  );
}

export default App;

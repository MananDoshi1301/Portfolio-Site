import Banner from './components/layout/banner/Banner';
import Nav from './components/layout/nav/Nav';
import Profile from './components/layout/profile/Profile';
import Work from './components/layout/work/Work'
import Contact from './components/layout/contact/Contact';
import './App.css';
import Footer from './components/layout/footer/Footer';
import Scrollpop from './components/layout/scrollpop/Scrollpop';
import ProgressBar from './components/layout/progressbar/ProgressBar';
import AnimationRevolve from './components/layout/animationRevolve/AnimationRevolve';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <AnimationRevolve />
      <Profile />
      <Work />
      <Contact />
      <Footer />
      <Scrollpop />
      <ProgressBar />
    </div>
  );
}

export default App;

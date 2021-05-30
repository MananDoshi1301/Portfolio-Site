import Banner from './components/layout/banner/Banner';
import Nav from './components/layout/nav/Nav';
import Profile from './components/layout/profile/Profile';
import Work from './components/layout/work/Work'
import Contact from './components/layout/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App mb-5">
      <Nav />
      <Banner />
      <Profile />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

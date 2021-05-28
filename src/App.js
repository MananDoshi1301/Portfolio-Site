import Banner from './components/layout/banner/Banner';
import Nav from './components/layout/nav/Nav';
import Profile from './components/layout/profile/Profile';
import Work from './components/layout/work/Work'
import './App.css';

function App() {
  return (
    <div className="App my-5">
      <Nav />
      <Banner />      
      <Profile />
      <Work />
    </div>
  );
}

export default App;

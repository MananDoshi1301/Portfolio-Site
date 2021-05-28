import Banner from './components/layout/banner/Banner';
import Nav from './components/layout/nav/Nav';
import Profile from './components/layout/profile/Profile';
import './App.css';

function App() {
  return (
    <div className="App my-5">
      <Nav />
      <Banner />      
      <Profile />
    </div>
  );
}

export default App;

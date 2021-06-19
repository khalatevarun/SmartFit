import './App.scss';
import Challenge from './components/Challenge';
import Header from './components/Header';
import Menu from './components/Menu';
import Monitoring from './components/Monitoring';
import Profile from './components/Profile';
import Recommended from './components/Recommended';
import Tips from './components/Tips';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Profile />
        <Menu />
      </div>
      <div className="main">
        <Header />
        <div className="container">
          <Monitoring />
          <div className="section2">
            <Challenge />
            <Tips />
          </div>
          <Recommended />
        </div>
      </div>
    </div>
  );
}

export default App;

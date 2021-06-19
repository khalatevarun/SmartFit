import './App.scss';
import Challenge from './components/Challenge';
import Header from './components/Header';
import Monitoring from './components/Monitoring';

function App() {
  return (
    <div className="App">
      <div className="sidebar">Hello World</div>
      <div className="main">
        <Header />
        <div className="container">
          <Monitoring />
          <Challenge />
        </div>
      </div>
    </div>
  );
}

export default App;

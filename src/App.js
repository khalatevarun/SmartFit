import './App.scss';
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
        </div>
      </div>
    </div>
  );
}

export default App;

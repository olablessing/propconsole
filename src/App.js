import logo from './logo.svg';
import './App.css';
import './components/layout.js';
import Header from './components/header';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="App page-container">
      <Header />
      <SideBar />
    </div>
  );
}

export default App;

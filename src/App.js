import logo from './logo.svg';
import './App.css';
import './components/layout.js';
import Header from './components/header';
import SideBar from './components/sideBar';
import Content from './components/content';
import TodosList from './components/TodosList';


function App() {
  
  return (
    <div className="App page-container">
      <Header />
      {/* <SideBar /> */}
      <Content />
      <TodosList />
    </div>
  );
}

export default App;

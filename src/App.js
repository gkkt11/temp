import './App.css';
import ALogin from './comp/login';
import User from './comp/user';
import Partner from './comp/partners'; 
import Sidebar from './comp/sidebar';
import Routers from './router/route'
import { sidebardt } from './comp/sidebardt';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;

import './App.scss';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Outlet />
      <navbar className="navbar">
        navbar
      </navbar>
    </div>
  );
}

export default App;

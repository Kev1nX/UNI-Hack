import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

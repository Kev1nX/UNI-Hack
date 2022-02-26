import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import './App.css';
import { useStores } from './states/Context';

function App() {

  const { searchPresenter } = useStores();

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage store={searchPresenter}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

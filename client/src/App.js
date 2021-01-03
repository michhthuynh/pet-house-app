
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;

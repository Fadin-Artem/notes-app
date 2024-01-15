import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={Note} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

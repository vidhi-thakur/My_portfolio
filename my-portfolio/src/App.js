import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects">
            projects
          </Route>
          <Route path="/blogs">
            blogs
          </Route>
          <Route path="/about">
            about me
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

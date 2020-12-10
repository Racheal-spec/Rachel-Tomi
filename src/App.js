import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Switch>
      <Route path= '/' exact component={Home}/>
      <Route path= '/blog' component={Blog}/>
      <Route path= '/contact' component={Contact}/>
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;


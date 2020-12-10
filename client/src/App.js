import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Main from './components/main';

// const [user] = useAuthState(auth);

function App() {
  return (
    <Router>
      <Route path='/login' component={Login} exact={true} />
      <Route path='/' component={Main} exact={true} />
    </Router>
  );
}

export default App;

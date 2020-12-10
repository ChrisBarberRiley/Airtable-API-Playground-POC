import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/auth/PrivateRoute';
import UserForm from './components/auth/UserForm';
import Main from './components/main';
import { AuthProvider } from './context/AuthContext';
// const [user] = useAuthState(auth);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path='/' component={Main} exact={true} />
          <Route path='/signup' component={UserForm} exact={true} />
          <Route path='/login' component={UserForm} exact={true} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

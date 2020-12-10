import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const { signup, login, currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      history.push('/');
    } catch (err) {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/');
    } catch (err) {
      setError('Failed log in');
    }
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      <form>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} onClick={handleSignup}>
          Signup
        </button>
        <button disabled={loading} onClick={handleLogin}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default UserForm;

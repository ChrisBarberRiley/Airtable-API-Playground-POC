import axios from 'axios';
import { useEffect, useState } from 'react';
import Data from './data';
import Header from './Header';
import { useAuth } from '../context/AuthContext';

function Main() {
  const [userData, setUserData] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/fetch-data');
      setUserData(res.data.records);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='container'>
          <h1>Our AirTable Data</h1>
          <h2>Logged in as: {currentUser.email}</h2>

          <div className='content'>
            {userData ? <Data records={userData} /> : '<h1>Loading</h1>'}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

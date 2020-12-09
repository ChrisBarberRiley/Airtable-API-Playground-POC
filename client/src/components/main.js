import axios from 'axios';
import { useEffect, useState } from 'react';
import Data from './data';

function Main() {
  const [userData, setUserData] = useState(null);

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
    <div className='wrapper' onClick={getData}>
      <div className='container'>
        <h1>Our AirTable Data</h1>

        <div className='content'>
          {userData ? <Data records={userData} /> : '<h1>Loading</h1>'}
        </div>
      </div>
    </div>
  );
}

export default Main;

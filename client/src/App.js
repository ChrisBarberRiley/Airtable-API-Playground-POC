import axios from 'axios';
import './App.css';

function App() {
  const getUser = async () => {
    try {
      const res = await axios.get('http://localhost:3000/fetch');
      const { bearer } = res.data;

      getData(bearer);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async (bearer) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${bearer}` },
      };
      const res = await axios.get(
        'https://api.airtable.com/v0/app3moXo7so1Q7p7s/Bugs%20and%20issues?maxRecords=3',
        config
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='App' onClick={getUser}>
      Hello
    </div>
  );
}

export default App;

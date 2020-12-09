import axios from 'axios';
import './App.css';

function App() {
  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/fetch-data');
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='App' onClick={getData}>
      Hello
    </div>
  );
}

export default App;

import { useEffect,useState } from 'react';
import './App.css';
import List from './components/List/List';

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  
  function debounce(func, wait) {
    let timeout;
  
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  

    const getData = () => {
      return fetch(`https://api.github.com/users/${user}`) 
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
  }

  const debouncedGetData = debounce(getData, 5000);

  useEffect(() => {
    if (user) {
      debouncedGetData();
    }
  }, [user]);


  return (
    <div className="App">
      <input type="text" placeholder="Search for User" onChange={(e) => setUser(e.target.value)} className="input_search" />
      <button onClick={getData} className="search_button">Search Github</button>
      <List data={data} />
    </div>
  );
}

export default App;

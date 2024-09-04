import { useEffect,useState } from 'react';
import './App.css';
import List from './components/List/List';
import './output.css';
import './components/List/List.css';



function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');


    const getData = () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      Promise.all([
      fetch(`https://api.github.com/users/${user}`,{
        headers: {
          'Authorization': `token ${token}`
      }
      }).then((response) => response.json()),
        fetch(`https://api.github.com/users/${user}/repos`,{
        headers: {
          'Authorization': `token ${token}`
      }
      }).then((response) => response.json())
    ]) 
    .then(([userData, userRepos]) => {
      setData({
        ...userData, // Kullanıcı verileri
        repos: userRepos // Repos'ları `data` prop'u içinde birleştiriyoruz
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
  }



  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);


  return (
    <div
    id='App' 
    className=" my-10 ">
      <div
      id='header' 
      className='shadow-lg flex justify-center items-center p-4 mb-6 rounded-md h-16 '>
      <input 
      type="text" 
      placeholder="Enter Github Username" 
      onChange={(e) => setUser(e.target.value)}
      id='input_search' 
      className=" border p-2 rounded-lg h-10 w-80 " />
      <button 
      onClick={getData}
      id='search_button' 
      className=" bg-blue-950 text-white p-2 ml-2 rounded-lg ">
        Search Github</button>
      </div>
      <List data={data} />
    </div>
  );
}

export default App;

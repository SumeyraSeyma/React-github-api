import { useEffect,useState } from 'react';
import './App.css';
import List from './components/List/List';
import './output.css';
import './components/List/List.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

    const getData = () => {
      if (user === '') {
        toast.error('Please enter a username', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (user.trim() === '') {
        toast.error('Please enter a valid username', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    

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
      setCurrentPage(1);
    })
    .catch((error) => console.error('Error fetching data:', error));

    
  }




  return (
    <div
    id='App' 
    className=" my-10 ">
      <ToastContainer />
      <div
      id='header' 
      className='shadow-lg flex justify-center items-center p-4 mb-6 rounded-md h-16 '>
      <input 
      type="text" 
      placeholder="Enter Github Username" 
      onChange={(e) => setUser(e.target.value)}
      id='input_search' 
      className=" border p-2 rounded-lg h-10 w-96 " />
      <button 
      onClick={getData}
      id='search_button' 
      className=" bg-blue-950 text-white p-2 ml-2 rounded-lg ">
        Search Github</button>
      </div>
      <List data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;

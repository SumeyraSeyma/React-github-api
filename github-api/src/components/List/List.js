import React from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


function List({ data}) {

    if ( !data ) {
        return <div> No data </div>
    }else if (data.login === undefined) {
        return <div className='text-base text-gray-600 '> No user data </div>
    }

    const langColors = {
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      Java: '#b07219',
      C: '#555555',
      'C++': '#f34b7d',
      'C#': '#178600',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Go: '#00ADD8',
      TypeScript: '#2b7489',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Shell: '#89e051',
      Swift: '#ffac45',
      Kotlin: '#A97BFF',
      Rust: '#dea584',
      R: '#198CE7',
      Dart: '#00B4AB',
      ObjectiveC: '#438eff',
      Perl: '#0298c3',
      Scala: '#c22d40',
      Haskell: '#5e5086',
      Lua: '#000080',
      Elixir: '#6e4a7e',
      Clojure: '#db5855',
      Groovy: '#e69f56',
      CoffeeScript: '#244776',
      TeX: '#3D6117',
      VimL: '#199f4b',
      Smalltalk: '#596706',
      Matlab: '#e16737',
      Verilog: '#b2b7f8',
      VHDL: '#adb2cb',
      Elm: '#60B5CC',
      Julia: '#a270ba',
      Crystal: '#000100',
      Forth: '#341708',
      Scheme: '#1e4aec',
      Solidity: '#AA6746',
      Groff: '#ecdebe',
      PowerShell: '#012456',
      Pascal: '#E3F171',
      Fortran: '#4d41b1',
      Haxe: '#df7900',
      JupyterNotebook: '#DA5B0B',
      Turing: '#cf142b',
      Vala: '#358a5b',
      Nim: '#37775b',
      GAMS: '#f49a22',
      Dockerfile: '#384d54',
      Makefile: '#427819',
      QML: '#44a51c',
      Less: '#1d365d',
      Sass: '#a53b70',
      SCSS: '#c6538c',
      Stylus: '#ff6347',
      YAML: '#cb171e',
      JSON: '#292929',
      XML: '#0060ac',
      Batchfile: '#C1F12E',
      Ada: '#02f88c',
      OCaml: '#3be133',
      ReasonML: '#ff5847',
      FSharp: '#b845fc',
      CommonLisp: '#3fb68b',
      EmacsLisp: '#c065db',
      Assembly: '#6E4C13',
      Nix: '#7e7eff',
      Zig: '#ec915c',
      CMake: '#64c5b1',
      Meson: '#007800',
      WebAssembly: '#04133b',
      D: '#ba595e',
      Mathematica: '#dd1100',
      Idris: '#b30000'
    };


  return (
    <div id='content' className=" bg-white/65   rounded-lg shadow-lg bg-white p-10">
      <div id='cart' className="flex items-center">
        <img
        className="rounded-full h-16 w-16" 
        src={data.avatar_url}
        alt="User Avatar" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="text-gray-500">@{data.login}</p>
          
        </div>
        <div id='github' className='text-gray-600' style={{marginLeft: 'auto'}}>
        <FontAwesomeIcon icon={faGithub}/>
        <a href={data.html_url} 
        className="ml-1 text-gray-800 underline underline-offset-1">GitHub</a>
        </div>
      </div>
      <p id='bio' className="mt-4 text-gray-700">
        {data.bio }
      </p>
      <div id='icon' className="mt-6 flex justify-between text-gray-600">
        <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {data.location || "No location"}</span>
        <span><FontAwesomeIcon icon={faUsers} /> {data.followers} Followers</span>
        <span><FontAwesomeIcon icon={faUserPlus} /> {data.following} Following</span>
        <span>
        <FontAwesomeIcon icon={faTwitter}/>
          {data.twitter_username ? (
            <a href={`https://twitter.com/${data.twitter_username}`} className='text-gray-800 underline underline-offset-1' target="_blank" rel="noopener noreferrer"> {data.twitter_username}
            </a>
          ) : (
             " No Twitter"
          )}
        </span>
      </div>
              
      <h3 className='mb-3 mt-3  font-semibold underline decoration-blue-950 text-gray-800' style={{
        fontStyle: 'italic',
      }} >Repositories</h3>
      {
        data.repos.length > 0 ? (
            <ul id='repos' className=' text-gray-700'>
                {
                data.repos && data.repos.map((repo) => (
                    <li key={repo.id} className='hover:list-disc '>
                    <a className='hover:underline hover:decoration-blue-950' href={repo.html_url}>{repo.name}</a>
                    <p className='bg-red-100'>{repo.description}</p>
                    <p>
                      
                    {
                      repo.language && (
                        <span className='ml-2'> <FontAwesomeIcon icon={faCircle} style={{color: langColors[repo.language] || '#0000' , fontSize: '0.7rem'
                        }}/>{repo.language}</span>
                        
                      )
                    }
                    </p>
                    </li>
                ))
                }
            </ul>
            ) : (
            <div>No Repositories</div>
        )
      }
    </div>
    
  );
}
export default List
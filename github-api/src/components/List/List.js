import React from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function List({ data}) {
    if ( !data ) {
        return <div> No data </div>
    }else if (data.login === undefined) {
        return <div> No user data </div>
    }


  return (
    <div className="max-w-xl rounded-lg shadow-lg bg-white p-10">
      <div className="flex items-center">
        <img className="rounded-full h-16 w-16" src={data.avatar_url} alt="User Avatar" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="text-gray-500">@{data.login}</p>
          
        </div>
        <div className='text-gray-600' style={{marginLeft: 'auto'}}>
        <FontAwesomeIcon icon={faGithub}/>
        <a href={data.html_url}
 
        className="text-gray-800 underline underline-offset-1">GitHub</a>
        </div>
      </div>
      <p className="mt-4 text-gray-700">
        {data.bio }
      </p>
      <div className="mt-6 flex justify-between text-gray-600">
        <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {data.location || "No location"}</span>
        <span><FontAwesomeIcon icon={faUsers} /> {data.followers} Followers</span>
        <span><FontAwesomeIcon icon={faUserPlus} /> {data.following} Following</span>
        <span>
        <FontAwesomeIcon icon={faTwitter}/>
          {data.twitter_username ? (
            <a href={`https://twitter.com/${data.twitter_username}`} target="_blank" rel="noopener noreferrer"> {data.twitter_username}
            </a>
          ) : (
             " No Twitter"
          )}
        </span>
      </div>
              
      <h3 className='mb-3 mt-3 underline decoration-emerald-500 text-gray-800' style={{
        fontStyle: 'italic',
      }} >Repositories</h3>
      {
        data.repos.length > 0 ? (
            <ul className='repo text-gray-700'>
                {
                data.repos && data.repos.map((repo) => (
                    <li key={repo.id} className='hover:list-disc hover:underline hover:decoration-emerald-500'>
                    <a href={repo.html_url}>{repo.name}</a>
                    <p>{repo.description}</p>
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
import React from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



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
        <a href={data.html_url}
        style={{marginLeft: 'auto'}} 
        className="text-gray-800">GitHub</a>
      </div>
      <p className="mt-4 text-gray-700">
        {data.bio }
      </p>
      <div className="mt-6 flex justify-between text-gray-600">
        <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {data.location || "No location"}</span>
        <span><FontAwesomeIcon icon={faTwitter} /> {data.twitter_username || "No Twitter"}</span>
        <span><FontAwesomeIcon icon={faUsers} /> {data.followers} Followers</span>
        <span><FontAwesomeIcon icon={faUserPlus} /> {data.following} Following</span>
      </div>
      <div className="mt-4 flex space-x-2">
        {data.twitter_username && (
          <a href={`https://twitter.com/${data.twitter_username}`} className="text-blue-500">
          <FontAwesomeIcon icon={faTwitter} />  Twitter</a>
        )}

      </div>
              
      <h3 className='mb-3 text-gray-800' >Repositories</h3>
      {
        data.repos.length > 0 ? (
            <ul className='repo text-gray-700'>
                {
                data.repos && data.repos.map((repo) => (
                    <li key={repo.id} className='hover:list-disc'>
                    <a href={repo.html_url}>{repo.name}</a>
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
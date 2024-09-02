import React from 'react'

function List({ data }) {
    if ( !data ) {
        return <div> No data </div>
    } else if (!Array.isArray(data)) {
        <div> Data is not an array </div>
    }else if (data.login === undefined) {
        return <div> No data </div>
    }

  return (
    <div>
        <ul>
        <li>Kullanıcı Adı: {data.login}</li>
        <li>ID: {data.id}</li>
        <li>Profile URL: <a href={data.html_url}>{data.html_url}</a></li>
        <li>Followers: {data.followers}</li>
        <li>Following: {data.following}</li>
        <li>Public Repos: {data.public_repos}</li>
        <li>Public Gists: {data.public_gists}</li>
        <li>Location: {data.location}</li>
        <li>Company: {data.company}</li>
        <li>Email: {data.email}</li>
        <li>Bio: {data.bio}</li>
        <li>Node ID: {data.node_id}</li>
        <li>Avatar URL: <img src={data.avatar_url} alt={data.login} /></li>
      </ul>
    </div>
  )
}

export default List
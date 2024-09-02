import React from 'react'



function List({ data}) {
    if ( !data ) {
        return <div> No data </div>
    }else if (data.login === undefined) {
        return <div> No user data </div>
    }


  return (
    <div>
        <img src={data.avatar_url} alt='avatar' height={200} width={200} />
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

      <h3>Repositories</h3>
      {
        data.repos.length > 0 ? (
            <ul>
                {
                data.repos && data.repos.map((repo) => (
                    <li key={repo.id}>
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
  )
}

export default List
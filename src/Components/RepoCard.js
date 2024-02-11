import React from "react";

const RepoCard = ({repo}) =>{
    return(
        <div className="card">
            <div className="card-body">
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                <h3>{repo.name}</h3>
                </a>
                <p><strong>Stars: </strong>{repo.stargazers_count}</p>
                <p><strong>Watchers: </strong>{repo.watchers_count}</p>
                <p><strong>Open Issues: </strong> {repo.open_issues}</p>
            </div>
        </div>
    )
}

export default RepoCard;
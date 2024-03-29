import React from "react";

const UserCard = ({user}) =>{
    return(
        <div className="card">
            <div className="card-body">
                <img src= {user.avatar_url} alt="user Img"/>
                <h1>{user.name}</h1>
                <p>{user.company}</p>
                <p>{user.bio}</p>
                <p> Public repos: {user.public_repos}</p>
            </div>
        </div>
    )
}

export default UserCard;
import React from 'react';
import Search from './Components/Search';
import UserCard from './Components/UserCard';
import RepoCard from './Components/RepoCard';

class App extends React.Component {

  state = {
    user: null,
    repos: [],
    userDataError: null,
    reposError: null,
    loading: false
  }

  fetchUserData = async username =>{
    const res = await fetch(`https://api.github.com/users/${username}`);
    if(res.ok){
      const data = await res.json()
      return {data};
    }
    const error = (await res.json()).message;
    return {error}
  }

  fetchRepos = async username =>{
    const res = await fetch(`https://api.github.com/users/${username}/repos?page=1`);
    if(res.ok){
      const data = await res.json()
      return {data};
    }
    const error = (await res.json()).message;
    return {error}
  }

  fetchData = async username =>{
    this.setState({ loading: true,userDataError: null,reposError: null,}, async ()=>{
      try{
        const [user, repos] = await Promise.all([
          this.fetchUserData(username),
          this.fetchRepos(username)
        ])
        if(user.data!== undefined && repos.data !== undefined){
          return this.setState({
            user: user.data,
            repos: repos.data,
            loading: false
          })
        }
           this.setState({
            userDataError: user.error,
            reposError: repos.error,
            loading: false,
           });
      }catch(err){
        this.setState({
          error: "there was some error",
          loading: false,
        })
      }
    })
  }

  render(){
    const {userDataError, reposError, loading, user, repos} = this.state;
    return (
      <div>
        <Search fetchData = {this.fetchData} />
        {(loading && (<p>Loading....</p>))}
        {userDataError && <p className='text-danger'> User:{userDataError}</p>}
        {!loading && !userDataError && user && <UserCard user={user} />}
        {!userDataError && reposError && <p className='text-danger'> {reposError} </p>}
        {!loading && 
        !reposError &&
        repos.map(repo=> <RepoCard key={(repo.id)} repo={repo}/>)}
      </div>
//we need to pass key value to distinguish from siblings
// we do not pass index as we may change list and index may not change
     );
  }
}

export default App;

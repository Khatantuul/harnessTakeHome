import Button from "./components/newRepoButton/Button";
import ListItem from "./components/row/ListItem"
import SearchBar from "./components/SearchBar"
import './globalStyles.css'
import  repos from './sample-data.json';

function App() {

  return (
    <div className="repo-list">
      <h1 className="repo-list__title">Repositories</h1>
     <div className="repo-list__header">
       <SearchBar />
       <Button>New Repository</Button>
     </div>
      <ul className="repo-list__list">
        {repos.map((repo)=>{
          return <ListItem key={repo.identifier} repo={repo}/>

        })}
      </ul>
    </div>
  )
}

export default App

'use strict'

import React,  {PropTypes} from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Action from './components/actions'
import Repos from './components/repos' 

const AppContent = ({userinfo, 
    repos, 
    starred, 
    handleSearch, 
    handleRepos, 
    handleStarred,
    isFetching,
    isDisabled
}) => (
    <div className="app">
        <Search handleSearch={handleSearch} isDisabled={isDisabled}/>

        { isFetching && <div>Carregando...</div> }

       { !!userinfo && <UserInfo userinfo={userinfo} /> }
      
       { !!userinfo && <Action handleRepo={handleRepos} handleStarred={handleStarred}  /> }

       { !!repos.length && <Repos 
             className='repos' 
                title ='Repositorios' 
                repos={repos}
            />
        }
 
       { !!starred.length && <Repos 
             className='starred' 
                title ='Favoritos' 
                repos={starred}
            />
        }
    </div>
)


AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleRepos: PropTypes.func.isRequired,
    handleStarred: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired   
}


export default AppContent
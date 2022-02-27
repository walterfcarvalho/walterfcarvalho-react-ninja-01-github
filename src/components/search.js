'use strict'

import React from  'react'
import { PropTypes } from 'react'

const Search = ({handleSearch, isDisabled}) => (
    <div className='search'>
        <input 
            type='search' 
            placeholder='Nome do usuario '
            disabled={isDisabled}
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired    
}


export default Search
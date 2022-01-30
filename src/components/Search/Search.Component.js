import React from 'react'

const Search = (props) =>{
    return(
        <input
            name='Search'
            className='Search-Box'
            type=''
            placeholder='type here'
            onChange = {props.handleSearch}
        />
    )
}

export default Search
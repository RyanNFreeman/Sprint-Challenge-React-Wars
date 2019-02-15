import React from 'react'
import Character from './Character'

const StarWarsCharacters = props => {
    return(
        <div>
            {props.characters.map(character => 
                <Character characterData={character} />
            )}
        </div>
    )
}


export default StarWarsCharacters
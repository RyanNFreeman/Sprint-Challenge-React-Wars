import React from 'react'
import './StarWars.css';

import Character from './Character'

const StarWarsCharacters = props => {
    return(
        <div>
            {props.characters.map(character => 
                <Character character={character} />
            )}
        </div>
    )
}


export default StarWarsCharacters
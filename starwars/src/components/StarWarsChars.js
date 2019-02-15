import React from 'react'
import Character from './components/Character'

const StarWarsChars = (props) => 
    {props.characters.map((characterFromMap, index) => 
    <Character key={index} character={characterFromMap} />
    )}

export default StarWarsChars
import React from 'react'
import './StarWars.css';


const Character = props => {
    return(
        <div className="main-character">
            <h1 className= "name"> {props.character.name}</h1>
            <p className= "attrs">Gender: {props.character.gender}</p>
            <p className= "attrs">Birth Year: {props.character.birth_year}</p>
            <p className= "attrs">Hair Color: {props.character.hair_color}</p>
            <p className= "attrs">Eye Color: {props.character.eye_color}</p>
            <p className= "attrs">Height: {props.character.height}</p>
        </div>
    )
}

export default Character
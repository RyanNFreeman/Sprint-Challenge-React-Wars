import React from 'react'

const Character = props => {
    return(
        <div className="main-character">
            <h1 className= "name"> {props.characterData.name}</h1>
            <p className= "attrs">Gender: {props.characterData.gender}</p>
            <p className= "attrs">Birth Year: {props.characterData.birth_year}</p>
            <p className= "attrs">Skin Color: {props.characterData.skin_color}</p>
            <p className= "attrs">Hair Color: {props.characterData.hair_color}</p>
            <p className= "attrs">Height: {props.characterData.height}</p>
        </div>
    )
}

export default Character
import React from 'react'

function Character(props) {
    return (
    <div className='characterstyle'>
        <img src={props.character.img} alt={props.character.name} />
    
    </div>
    )
}

export default Character
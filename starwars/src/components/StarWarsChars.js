import React, { Component } from 'react'
import Character from './components/Character'





const StarWarsChars = props => {
    return(
        <div>
            {props.data.map(char => 
                <Character characterData={char} />
                )}
        </div>
    )
}
    


export default StarWarsChars


// class StarWarsChars extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//     }
// {/* <Character key={index} character={characterFromMap} /> */}

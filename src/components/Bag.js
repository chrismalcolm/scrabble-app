import React from 'react'
import { Space } from './Space'
import { Tile } from './Tile'

const tileArray = (
    "AAAAAAAAABBCCDDDDEEEEEEEE" +
    "EEEEFFGGGHHIIIIIIIIIJKLLL" +
    "LMMNNNNNNOOOOOOOOPPQRRRRR" +
    "RSSSSTTTTTTUUUUVVWWXYYZ##"
).split("");

class Bag extends React.Component{

    constructor (props) {
        super(props);
        this.bag_id = props.bag_id;
    }

    render () {
        return (
            <div
                id={this.bag_id}
                className="bag"
            >
                { tileArray.map( (letter, id) => <Space><Tile letter={letter} tile_id={id} /></Space> )}
            </div>
        )
    }

}

export {
    Bag
}

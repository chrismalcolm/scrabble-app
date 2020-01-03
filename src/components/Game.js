import React from 'react'
import { Tile } from './Tile'
import { Square } from './Square'
import { Space } from './Space'
import _ from 'lodash';

export default class Game extends React.Component {

    constructor (props) {
        super(props);

        this.boardArray = (
            "500200050002005040003000300040004000202000400" +
            "200400020004002000040000040000030003000300030" +
            "002000202000200500200010002005002000202000200" +
            "030003000300030000040000040000200400020004002" +
            "004000202000400040003000300040500200050002005"
        ).split("");

        this.tileArray = (
            "AAAAAAAAABBCCDDDDEEEEEEEE" +
            "EEEEFFGGGHHIIIIIIIIIJKLLL" +
            "LMMNNNNNNOOOOOOOOPPQRRRRR" +
            "RSSSSTTTTTTUUUUVVWWXYYZ##"
        ).split("");
    }

    render () {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="board">
                        { this.boardArray.map( (type, id) => <Square square_type={type} key={id} /> )}
                    </div>
                    <div>
                        <div className="bag">
                            { this.tileArray.map( (letter, id) => <Space><Tile letter={letter} tile_id={id} /></Space> )}
                        </div>
                        <div className="rack">
                            { [1,2,3,4,5,6,7].map( (letter, id) => <Space></Space> )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

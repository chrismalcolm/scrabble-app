import React from 'react'
import { Tile } from './Tile'
import { Square } from './Square'
import { Space } from './Space'
import { Rack } from './Rack'
import { Board } from './Board'
import { SolveButton, SolveSolution } from './Solve'
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
                <div>
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
                </div>
                    <div>
                        <div className="bag">
                            { this.tileArray.map( (letter, id) => <Space><Tile letter={letter} tile_id={id} /></Space> )}
                        </div>
                        <SolveButton/>
                    </div>
                    <div>
                        <Board/>
                        <Rack/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

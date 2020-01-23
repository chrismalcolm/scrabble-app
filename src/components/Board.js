import React from 'react'
import { Square } from './Square'

class Board extends React.Component{

    constructor(props) {
        super(props);
        this.id = "board";
        this.boardstring = "";
        this.boardArray = (
            "500200050002005040003000300040004000202000400" +
            "200400020004002000040000040000030003000300030" +
            "002000202000200500200010002005002000202000200" +
            "030003000300030000040000040000200400020004002" +
            "004000202000400040003000300040500200050002005"
        ).split("");
    }

    render() {
        return (
            <div
                id={this.id}
                className="board"
                boardstring={this.boardstring}
            >
                { this.boardArray.map( (type, id) => <Square square_type={type} key={id} container="board"/> )}
                {this.props.children}
            </div>
        )
    }

}

export {
    Board
}

import React from 'react'


class SolveButton extends React.Component{

    constructor (props) {
        super(props);
        this.id = props.id;

    }

    solve (ev) {
        const board = document.getElementById("board");
        let boardstring = "";
        for (let i=0; i<225; ++i) {
            if (board.children[i].children.length == 0) {
                boardstring += " ";
            }
            else {
                boardstring += board.children[i].children[0].getAttribute('letter');
            }
        }
        board.setAttribute('boardstring', slotstring);
        console.log(board)

        const rack = document.getElementById("rack0");
        let slotstring = "";
        for (let i=0; i<7; ++i) {
            if (rack.children[i].children.length == 0) continue;
            slotstring += rack.children[i].children[0].getAttribute('letter');
        }
        rack.setAttribute('slotstring', slotstring);
        console.log(rack)
    }

    render () {
        return (
            <button onClick={this.solve} className="solvebutton">
                <p><b>Solve</b></p>
            </button>
        )
    }

}

class SolveSolution extends React.Component{

    constructor (props) {
        super(props);
        this.id = props.id;
        this.word = "";
        this.coordinates = "";
        this.score = 0;
    }

    render () {
        return (
            <div
                id={this.id}
                className="solvesolution"
            >
                <p><b>Word:</b></p>
                <p>{this.word || "<empty>"}</p>
                <p><b>Coordinates:</b></p>
                <p>{this.coordinates || "<empty>"}</p>
                <p><b>Score:</b></p>
                <p>{this.score}</p>
            </div>
        )
    }

}

export {
    SolveButton,
    SolveSolution
}

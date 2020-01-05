import React from 'react'
import Tile from './Tile'

const premiumEnum = {
    0 : "none",
    1 : "start",
    2 : "double_letter",
    3 : "triple_letter",
    4 : "double_word",
    5 : "triple_word",
}

class Square extends React.Component{

    constructor (props) {
        super(props);
        this.premium = premiumEnum[props.square_type];
        this.children = props.children;
    }

    drop(e) {
        if (e.target.children.length) return;

        e.preventDefault();

        const tile_id = e.dataTransfer.getData('tile_id');
        const tile = document.getElementById(tile_id);

        e.target.appendChild(tile);
    }

    dragOver(e) {
        e.preventDefault();
    }

    render () {
        return (
            <div
                id={this.id}
                className="square"
                premium={this.premium}
                onDrop={this.drop}
                onDragOver={this.dragOver}
            >
                {this.props.children}
            </div>
        )
    }

}

export {
    Square
}

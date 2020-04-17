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

const premiumLabelUI = {
    0 : "Normal",
    1 : "Start",
    2 : "Double Letter",
    3 : "Triple Letter",
    4 : "Double Word",
    5 : "Triple Word",
}

class Square extends React.Component{

    constructor (props) {
        super(props);
        this.id = props.id;
        this.container = props.container;
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
                container={this.container}
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
    Square, premiumLabelUI
}

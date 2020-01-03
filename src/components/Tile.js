import React from 'react'

const valueEnum = {
    "A" : 1, "B" : 3, "C" : 3, "D" : 2, "E" : 1, "F" : 4, "G" : 2, "H" : 4,
    "I" : 1, "J" : 8, "K" : 5, "L" : 1, "M" : 3, "N" : 1, "O" : 1, "P" : 3,
    "Q" : 10, "R" : 1, "S" : 1, "T" : 1, "U" : 1, "V" : 4, "W" : 4, "X" : 8,
    "Y" : 4, "Z" : 10
}

class Tile extends React.Component{

    constructor (props) {
        super(props);
        this.tile_id = props.tile_id;
        this.letter = props.letter.toUpperCase();
        this.value = valueEnum[this.letter];
    }

    dragStart(e) {
        const target = e.target;
        e.dataTransfer.setData('tile_id', target.id);
    }

    dragOver(e) {
        e.stopPropagation();
    }

    render () {
        return (
            <div
                id={this.tile_id}
                letter={this.letter}
                className="tile"
                draggable="true"
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
            >
                <p>{this.letter}<sub>{this.value}</sub></p>
            </div>
        )
    }

}

export {
    Tile
}

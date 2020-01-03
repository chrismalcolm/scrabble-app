import React from 'react'

class Space extends React.Component{

    constructor (props) {
        super(props);
        this.children = props.children;
        this.container = props.container;
    }

    drop(e) {
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
                className="space"
                onDrop={this.drop}
                onDragOver={this.dragOver}
            >
                {this.props.children}
            </div>
        )
    }

}

export {
    Space
}

import React from 'react'

class Space extends React.Component{

    constructor (props) {
        super(props);
        this.id = props.id;
        this.container = props.container;
        this.slot = parseInt(props.slot, 10);
    }

    drop(e) {
        if (e.target.children.length) return;

        e.preventDefault();

        const tile_id = e.dataTransfer.getData('tile_id');
        const tile = document.getElementById(tile_id);

        e.target.appendChild(tile);

        //const container = document.getElementById(e.target.container);
        const container = document.getElementById("rack");
        console.log(container)
        console.log(e.target)
        container.updateSlotArray("a", 3);
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

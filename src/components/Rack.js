import React from 'react'
import { Space } from './Space'

class Rack extends React.Component{

    constructor(props) {
        super(props);
        this.id = "rack0";
        this.slotstring = "#######";
    }

    updateSlotArray(ev) {
        ev.preventDefault();

        const target = ev.target;

        if (target.getAttribute('container') != "rack0") return;

        const tile_id = ev.dataTransfer.getData('tile_id');
        const tile = document.getElementById(tile_id);

        const letter = tile.getAttribute('letter');
        const slot = parseInt(target.getAttribute('slot'));

        const rack = document.getElementById("rack0");

        const slotstring = rack.getAttribute('slotstring');
        rack.setAttribute('slotstring', slotstring.substr(0, slot) + letter + slotstring.substr(slot+1));

        console.log(rack)
    }

    render() {
        return (
            <div
                id={this.id}
                className="rack"
                slotstring={this.slotstring}
                onDrop={this.updateSlotArray}
            >
                { ["0","1","2","3","4","5","6"].map( (slot) => <Space id={"rack_slot_"+slot} container={this.id} slot={slot}/> )}
                {this.props.children}
            </div>
        )
    }

}

export {
    Rack
}

import React from 'react'
import { Space } from './Space'

class Rack extends React.Component{

    constructor(props) {
        super(props);
        this.id = "rack";
        this.slot_array = ["", "", "", "", "", "", ""];
    }

    updateSlotArray(letter, slot) {
        this.slot_array[slot] = letter;
    }

    render() {
        return (
            <div
                id={this.id}
                className="rack"
            >
                { ["0","1","2","3","4","5","6"].map( (slot) => <Space id={"rack_slot_"+slot} container={this} slot={slot}/> )}
                {this.props.children}
            </div>
        )
    }

}

export {
    Rack
}

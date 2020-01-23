import React from 'react'
import { Space } from './Space'

class Rack extends React.Component{

    constructor(props) {
        super(props);
        this.id = "rack0";
        this.slotstring = "";
    }

    render() {
        return (
            <div
                id={this.id}
                className="rack"
                slotstring={this.slotstring}
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

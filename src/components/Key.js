import React from 'react'
import { Square, premiumLabelUI } from './Square'


class Key extends React.Component{

    constructor (props) {
        super(props);
        this.key_id = props.key_id;
        this.boardArray = "012345".split("");
    }

    render () {
        return (
            <div
                id={this.key_id}
                className="key"
            >
                <div><b>Colour</b></div><div><b>Key</b></div>
                { this.boardArray.map( (type, id) => <React.Fragment><Square square_type={type} key={id} container="key"/>{premiumLabelUI[type]}</React.Fragment> )}
                {this.props.children}
            </div>
        )
    }

}

export {
    Key
}

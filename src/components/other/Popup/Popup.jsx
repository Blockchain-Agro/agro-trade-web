import React from 'react';
import Popup from 'reactjs-popup';
import { Component } from 'react';

class PopupComponent extends Component {
    render() {
        return (
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
        );
    }
}
export default PopupComponent;

import React from 'react';
import ReactDOM from 'react-dom';


class PortalExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return ReactDOM.createPortal(
            <div className="modal">
             <div><span>Hello Modal</span></div>
             <button>Close</button>
            </div>
           , document.body);
    }
}


export default PortalExample;
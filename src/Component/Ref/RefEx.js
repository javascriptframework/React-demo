import React from 'react';
import ContextExample from '../Context/ContextExample';

class RefExample extends React.Component {
    constructor(props) {
        super(props)
        this.divRef = React.createRef();
    }

    handleButtonClick = () => {
        this.divRef.current.style.backgroundColor = 'Green';
        this.divRef.current.style.height = '500px';
        /* document.getElementById('d1').style.backgroundColor = 'Green';
        document.getElementById('d1').style.height = "500px"; */
    }
    render () {
        return(
            <div>
                <div id="d1" ref={this.divRef}>Sample Text</div>
                <div id="d2" ref={this.divRef}>Another Sample Text</div>
                <button onClick = {this.handleButtonClick}>Apply Style</button>

                <ContextExample/>
            </div>
        )
    }
}

export default RefExample;
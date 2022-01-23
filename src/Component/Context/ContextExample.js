import React from 'react';
import ContextEx1 from './ContextEx1';
import ContextEx2 from './ContextEx2';
import ContextEx3 from './ContextEx3';

class ContextExample extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <ContextEx1/>
                <ContextEx2/>
                <ContextEx3/>
            </div>
        )
    }
}

export default ContextExample;
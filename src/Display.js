import React  from 'react';
import PropTypes from 'prop-types';

 export class Display extends React.Component {
    constructor(props){
        console.log('Constructor called');
        console.log(props);
        super(props);
        this.state = {
            country: 'India',
            region: 'east',
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        console.log(state);
        console.log('get Derived state from props called');
        return { ...state, personName: props.fname}
    }

     componentDidMount() {
         console.log('Did mount called');
        /*  setTimeout(() => {
             this.setState({ country: 'Australia'});
         }, 3000) */
     }


    sendData = () => {
        var collegeName = 'Oxford';
        this.props.sendDataToParent(collegeName);
    }

    handleChange = (e) => {
        this.setState({ country: e.target.value}, () => this.props.sendDataToParent(this.state));
        
    }

    updateRegion = () => {
        this.setState({region: 'west'});
    }
    render() {
        console.log('render calls')
        var h1Style= {
            height:100, backgroundColor: 'red' 
        }

        const diplayFirstName = true;
        console.log(this.props)
        const { person, fname} = this.props;
        const { id, firstName, region } = person;
        return(
            <div>
               {/*  <h1 className="center" style={h1Style}>Data from Display Component.</h1>
                {diplayFirstName ? <div>First Name is {fname}</div> :<div>LastName is John</div>}
                <div>Person id is {id}</div>
                <div>Person name is {firstName}</div>
                <div>Person region is {region}</div> */}
                <input type="text" value={this.state.country} onChange={this.handleChange}/>
                <div>The region value is {this.state.region}</div>
                <button onClick={this.updateRegion}>Update Region</button>
                <div>Country is {this.state.country}</div>
                <div>The personName is  {this.state.personName}</div>
                <button onClick={this.sendData}>Send Data</button>
            </div>
        )
    }
}


Display.propTypes = {
    fname : PropTypes.string,
}

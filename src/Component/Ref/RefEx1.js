import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput = ()=> {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
    //   document.getElementById('t1').style.backgroundColor = 'red'
      this.textInput.current.focus();
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input id="d1"
            type="text"
            id="t1"
            ref={this.textInput} />
          <input id="d2"
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }

  export default CustomTextInput;
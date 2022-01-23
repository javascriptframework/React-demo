import React from 'react';
import { CourseContextConsumer, CourseContext } from './ContextFile';


class ContextEx1 extends React.Component {
    constructor(props){
        super(props)
    }
    static contextType = CourseContext;
    render() {
        console.log(CourseContext);
       console.log(this.context);
        return (
            <div>
                <h2>ContextEx 1 Component</h2>
                <div>the context in ContextEx 1 through contextType  is {this.context.course}</div>
            
            <CourseContextConsumer>
                {(contextObj) =>{
                    console.log(contextObj);
                    const {course, city} = contextObj.state;
                    const { dispatch } = contextObj;
                    const updateCourseName = () => {
                        console.log('Update Course');
                        dispatch({type: 'update_course', payload: 'Angular' });
                    }
                    return(
                        <>
                            <div>the context in ContextEx 1 through consumer is {course}</div>
                            <button onClick={updateCourseName}>Update Course Name</button>
                            <div>The city value is {city}</div>
                        </>
                    )
                }}
            </CourseContextConsumer>
            </div>
        )
    }
}

export default ContextEx1;
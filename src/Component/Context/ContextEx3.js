import React, { useContext } from 'react';
import { CourseContextConsumer, CourseContext } from './ContextFile';

function ContextEx3() {
    const mycontext = useContext(CourseContext);
    console.log(CourseContext);
    console.log(mycontext);

    const {course, setCourseName} = mycontext;
    const updateCourseName = () => {
                        console.log('Update Course');
                        setCourseName('Vue');
                    }
    return(
        <div>
            <h2>ContextEx 3 Component</h2>
            <div>The course value in ContextEx 3 is {mycontext.course}</div>
            <button onClick={updateCourseName}>Update Course Name</button>
            
        </div>
    )
}

export default ContextEx3;
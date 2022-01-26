import React from 'react';
import { CourseContextConsumer } from './ContextFile';

function ContextEx2 () {
            return (
            <div>
            <h2>ContextEx 2 Component</h2>
            <CourseContextConsumer>
               {(context) =>{
                   console.log(context)
                   return(
                       <div>The course value is ContextEx 2 is  {context.course}</div>
                   )
               }}
            </CourseContextConsumer>
            </div>
        )
}

export default ContextEx2;
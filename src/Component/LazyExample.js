import React, { useState, lazy, Suspense } from 'react';

const MaterialUITableExample = lazy(() => import('../Excercises/MaterialUITable'));
const Clock = lazy(() => import('../Excercises/Clock'));


function LazyExample() {
    const [studentDataVisibility, setStudentDataVisibility] = useState(false);
    const [clockVisibility, setClockVisibility] = useState(false);
    return(
        <div>
            <h2>Lazy Example</h2>
            <button onClick={()=>setStudentDataVisibility(true)}>Display Student Data</button>
            <button onClick={()=>setClockVisibility(true)}>Display Clock</button>
            { studentDataVisibility &&
                <Suspense fallback={<h3>Loading Student Data...</h3>}>
                    <MaterialUITableExample/>
                </Suspense>
            }
            { clockVisibility &&
                <Suspense fallback={<h3>Loading Clock...</h3>}>
                    <Clock/>
                </Suspense>
            }
        </div>
    )
}

export default LazyExample;
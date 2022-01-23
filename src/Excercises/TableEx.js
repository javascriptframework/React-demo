import React from 'react';

export function TableExample() {
    function studentInfo(name, id, region, phoneNumber) {
        return {name, id, region, phoneNumber}
    }

    const studentData = [
        studentInfo('Mary', 1,'East', 12345),
        studentInfo('John', 2,'West', 45678),
        studentInfo('Peter', 3,'East', 12345),
        studentInfo('steve', 4,'West', 45678),
        studentInfo('Mark', 5,'East', 12345),
    ];
    return(
        <table style={{border:'1px solid black'}}>
          { studentData.map((student, index) => {
            return (<tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.region}</td>
                <td>{student.phoneNumber}</td>
                </tr>)
        })}
        </table>
        
    )
}
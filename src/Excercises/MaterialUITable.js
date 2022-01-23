import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

 function MaterialUITableExample() {
    const classes = useStyles();

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
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="right">Student Id</TableCell>
                <TableCell align="right">Studen Name</TableCell>
                <TableCell align="right">Student Region</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {studentData.map((student) => (
                <TableRow key={student.id}>
                    {/* <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell> */}
                    <TableCell align="right">{student.id}</TableCell>
                    <TableCell align="right">{student.name}</TableCell>
                    <TableCell align="right">{student.region}</TableCell>
                    <TableCell align="right">{student.phoneNumber}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        
    )
}

export default MaterialUITableExample;
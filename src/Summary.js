import  React,{useState} from 'react';
import "./App.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData() {
  return { };
}

const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Summary = (props) => {
    const[object,setObject]=useState('')
console.log(props);

  return (
    <>
          <pre>{props.object}</pre>

    <TableContainer component={Paper}>
    <Table style={{marginTop:"2rem"}} sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">
          Have you been diagnosed with this problem?</TableCell>
          <TableCell align="center">Did the problem start after a physical trauma?</TableCell>
          <TableCell align="center">Did the problem start after a mental trauma?</TableCell>
          <TableCell align="center">How Often do you experience the problem?</TableCell>
          <TableCell align="center">When do you experience the problem?</TableCell>
          <TableCell align="center">How intense is the experience of the problem on average on a 0-10scale?</TableCell>


        </TableRow>
      </TableHead>
      <TableBody>
        { props.length > 0 &&
            props.map((index,key) => {
          return (
          <TableRow
            key={index+1}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index.index}
            </TableCell>
            <TableCell align="center">{props.state}</TableCell>
            <TableCell align="center">{props.state}</TableCell>
            <TableCell align="center">{props.state}</TableCell>
            <TableCell align="center">{props.state}</TableCell>
          </TableRow>
          )
          }
        )}
      </TableBody>
    </Table>
  </TableContainer>
  </>
    )
}
export default Summary
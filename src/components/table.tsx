import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.info.main,
  },
  // hide last border
  // '&:last-child td, &:last-child th': {
  //   border: 0,
  //   margin:5
  // },
}));

function createData(
  id: string,
  title: string,
  artist: string,
  gener: string,
  price: number,
) {
  return { id,
    title,
    artist,
    gener,
    price};
}

const rows = [
  createData('id1', "first song", 'artist1', "Pop", 4.0),
  createData('id2', "first song", 'artist1', "Pop", 4.0),
  createData('id3', "first song", 'artist1', "Pop", 4.0),

];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} style={{ height: 400, width: '70%',marginInlineStart:240 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{padding:12}}>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="right">title</StyledTableCell>
            <StyledTableCell align="right">artist</StyledTableCell>
            <StyledTableCell align="right">gener</StyledTableCell>
            <StyledTableCell align="right">price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.artist}</StyledTableCell>
              <StyledTableCell align="right">{row.gener}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

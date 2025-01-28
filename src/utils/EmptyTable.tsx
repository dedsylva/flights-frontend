import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GeneralText } from "../models/Table";

const EmptyTable: React.FC<GeneralText> = ({ text }) => {

  return (
        <TableContainer component={Paper} className="table-container">
          <Table aria-label="flights table" className = "flights-table">
            <TableHead>
              <TableRow>
                <TableCell className="table-cell" align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableCell colSpan={7} align="center"> 
                  {text}
                </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
  )
}

export default EmptyTable;
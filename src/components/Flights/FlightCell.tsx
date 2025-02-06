import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosAirplane } from "react-icons/io";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Flight } from "../../models/Flight";
import { formatCurrency } from "../../utils/helpers";
import "./FlightCell.scss";

const FlightCell: React.FC<{ Flight: Flight }> = ({ Flight }) => {

  const navigate = useNavigate(); 
  const handleFlightClick = () => {
    navigate(`/flights/${Flight.id}`); 
  };

  return (
    <div className="flight-cell-container" onClick={handleFlightClick}>
      <TableContainer component={Paper} className="flight-cell-table-container">
        <Table aria-label="flights table" className="flight-cell-table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} className="flight-cell-table-title">
                {Flight.source} → {Flight.destination} <IoIosAirplane className="airplane-icon" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="flight-cell-title">Flight Time</TableCell>
              <TableCell className="flight-cell-value">{new Date(Flight.flightTime).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="flight-cell-title">Available Seats</TableCell>
              <TableCell className="flight-cell-value">{Flight.passengersLeft}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="flight-cell-title">Price Per Seat ($)</TableCell>
              <TableCell className="flight-cell-value">{formatCurrency(Flight.price)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FlightCell;

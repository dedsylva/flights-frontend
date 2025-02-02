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
import { HomeFlight } from "../../models/Flight";
import { formatCurrency } from "../../utils/helpers";
import "./FlightCell.scss";

const FlightCell: React.FC<{ homeFlight: HomeFlight }> = ({ homeFlight }) => {

  const navigate = useNavigate(); 
  const handleFlightClick = () => {
    navigate(`/flights/${homeFlight.id}`); 
  };

  return (
    <div className="flight-cell" onClick={handleFlightClick}>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="flights table" className="flights-table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} className="table-title">
                {homeFlight.source} → {homeFlight.destination} <IoIosAirplane className="airplane-icon" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="cell-title">Flight Time</TableCell>
              <TableCell className="cell-value">{new Date(homeFlight.flightTime).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="cell-title">Available Seats</TableCell>
              <TableCell className="cell-value">{homeFlight.passengersLeft}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="cell-title">Price Per Seat ($)</TableCell>
              <TableCell className="cell-value">{formatCurrency(homeFlight.price)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FlightCell;

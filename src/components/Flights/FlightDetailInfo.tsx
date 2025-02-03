import React from "react";
import { useState, useEffect} from "react";
import { Flight } from "../../models/Flight";
import "./FlightDetailInfo.scss";
import { addFlight, fetchFlightById } from "../../services/flightApiService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatCurrency } from "../../utils/helpers";

const FlightDetailInfo: React.FC<{ id?: string }> = ({ id }) => {

  const [flight, setFlight] = useState<Flight>();
  const [error, setError] = useState<string | null>(null); 

  const getFlightById = async (id?: string) => {
    console.log("Fetching Data");
    if (id) {
      try {
          const flight = await fetchFlightById(id);
          console.log(flight)
          setFlight(flight); 
          setError(null);
        } catch (err: any) {
          setError(err.message);
          console.error("Error fetching flights:", err.message);
        }
      }
      else {
          setError("Id is invalid");
      }
  };


  const handleBookFlight = async (flight: Flight) => {
    await addFlight(flight);
  };


  useEffect(() => {
    getFlightById(id);
  }, [id]);

  return (
    <div className="flight-cell">
    <TableContainer component={Paper} className="flight-detail-info-table-container">
      <Table aria-label="flights table" className="flights-table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} className="table-title">
              {flight?.source} → {flight?.destination} 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="cell-title">Flight Time</TableCell>
            {/* <TableCell className="cell-value">{new Date(flight.flightTime).toLocaleString()}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className="cell-title">Available Seats</TableCell>
            <TableCell className="cell-value">{flight?.passengersLeft}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="cell-title">Price Per Seat ($)</TableCell>
            {/* <TableCell className="cell-value">{formatCurrency(flight.price)}</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>

  );
};

export default FlightDetailInfo;

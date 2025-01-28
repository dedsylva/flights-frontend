import { fetchAvailableFlights } from "../../services/flightApiService";
import React, { useState, useEffect } from "react";
import { Flight } from "../../models/Flight";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Flights.scss';


const Flights: React.FC = () => {

  const [flights, setFlights] = useState<Flight[]>([]); // Array of Flight objects
  const [error, setError] = useState<string | null>(null); // Error message or null

  const getFlights = async () => {
    console.log("Fetching Data");
    try {
        const userData: Flight[] = await fetchAvailableFlights();
        setFlights(userData); 
        setError(null);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching flights:", err.message);
      }
  };


  useEffect(() => {
      getFlights();
    }, []);

  return (
    <div>
      <h2>Flights Available</h2>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error if any */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="flights table" className = "flights-table">
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell align="center">Destination</TableCell>
              <TableCell align="center">Flight Time</TableCell>
              <TableCell align="center">Passengers</TableCell>
              <TableCell align="center">Total Capacity</TableCell>
              <TableCell align="center">Price ($)</TableCell>
              <TableCell align="center">Profit ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.length > 0 ? (
              flights.map((flight, index) => (
                <TableRow key={index}>
                  <TableCell>{flight.source}</TableCell>
                  <TableCell align="right">{flight.destination}</TableCell>
                  <TableCell align="right">{new Date(flight.flightTime).toLocaleString()}</TableCell>
                  <TableCell align="right">{flight.passengers}</TableCell>
                  <TableCell align="right">{flight.totalCapacity}</TableCell>
                  <TableCell align="right">{formatCurrency(flight.price)}</TableCell>
                  <TableCell align="right">{formatCurrency(flight.profit)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No flights available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );

}

export default Flights
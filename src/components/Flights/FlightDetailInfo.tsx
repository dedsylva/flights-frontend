import React, { useContext } from "react";
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
import { UserContext } from "../../context/UserContext";
import { User } from "../../models/User";

const FlightDetailInfo: React.FC<{ id?: string }> = ({ id }) => {

  const [flight, setFlight] = useState<Flight>();
  const [bookAvailable, setBookAvailable] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 
  const { user } = useContext(UserContext);

  const getFlightById = async (id?: string) => {
    console.log("Fetching Flight Data");
    if (id) {
      try {
          const flight = await fetchFlightById(id);
          console.log('flight received', flight)
          setFlight(flight); 
          flight.passengersLeft > 0 ? setBookAvailable(true) : setBookAvailable(false);
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


  const handleBookFlight = async (flight: Flight | undefined, user: User | null) => {
    if (flight === undefined) {
      setError('Flight is undefined');
    } else if (user === null) {
      setError('User not found in context');
    } else  {

      try {
        const response = await addFlight(flight, user);
        console.log('Success booking flight', response);
      } catch (err: any) {
        console.error('Error booking flight:', err.message);
        setError(err.message);
      }
    }
  };


  useEffect(() => {
    getFlightById(id);
    console.log('flight: ', flight)
  }, [id]);


  // TODO: implement error handling and show a red error message
  return (

    <>
      {error ? (<h1>Error</h1>) :
       (
            <div className="flight-detail-info-container">
              <TableContainer component={Paper} className="flight-detail-info-table-container">
                <Table aria-label="flights table" className="flight-detail-info-table">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2} className="flight-detail-info-table-title">
                        {flight?.source} → {flight?.destination} 
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className="flight-detail-info-cell-title">Flight Time</TableCell>
                      <TableCell className="flight-detail-info-cell-value">{new Date(flight?.flightTime).toLocaleString()}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="flight-detail-info-cell-title">Available Seats</TableCell>
                      <TableCell className="flight-detail-info-cell-value">{bookAvailable ? flight?.passengersLeft : '0'} </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="flight-detail-info-cell-title">Price Per Seat ($)</TableCell>
                      <TableCell className="flight-detail-info-cell-value">{formatCurrency(flight?.price)}</TableCell>
                    </TableRow>
                    {bookAvailable && 
                              <TableRow onClick={() => handleBookFlight(flight, user)}>
                                <TableCell colSpan={2} className="flight-detail-info-book-flight-button">Book Flight</TableCell>
                              </TableRow> 
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
        )
      }
    </>

  );
};

export default FlightDetailInfo;

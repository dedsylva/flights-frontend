import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHomeFlightById } from "../../services/flightApiService";
import AirPlaneDetail from '../../assets/AirPlaneDetail.jpg'
import { HomeFlight } from "../../models/Flight";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoIosAirplane } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { formatCurrency } from "../../utils/helpers";
import './FlightDetails.scss';

const FlightDetails: React.FC = () => {

    const { id } = useParams<{ id: string }>(); // gettind id from URL
    const [homeFlight, setHomeFlight] = useState<HomeFlight>(); 
    const [error, setError] = useState<string | null>(null); 

    const getFlightById = async (id?: string) => {
      console.log("Fetching Data");
      if (id) {
        try {
            const flight = await fetchHomeFlightById(id);
            console.log(flight)
            setHomeFlight(flight); 
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


    useEffect(() => {
      getFlightById(id);
    }, [id]);


  if (error || !homeFlight) {
      return (
    <div className="error-container">
      <h1>Error</h1>
    </div>
  )
  }

  return (
  
  <div className="flight-details-container">
      <img src={AirPlaneDetail} alt="flight-details" />
          <div className="separator"></div> {/* Vertical line */}
        <h4 className="h4-flight-details">{homeFlight.source} - {homeFlight.destination} </h4>
    </div>


  )
}

export default FlightDetails;

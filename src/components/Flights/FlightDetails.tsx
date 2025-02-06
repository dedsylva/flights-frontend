import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFlightById } from "../../services/flightApiService";
import AirPlaneDetail from '../../assets/AirPlaneDetail.jpg'
import { Flight } from "../../models/Flight";
import './FlightDetails.scss';
import FlightDetailInfo from "./FlightDetailInfo";
import { UserContext } from "../../context/UserContext";

const FlightDetails: React.FC = () => {

    const { id } = useParams<{ id: string }>(); // gettind id from URL
    const [flight, setFlight] = useState<Flight>(); 
    const [error, setError] = useState<string | null>(null); 
    const { user } = useContext(UserContext);

    const getFlightById = async (id?: string) => {
      console.log("Fetching Data");
      if (id) {
        try {
            const Flight = await fetchFlightById(id);
            console.log('Flight', Flight)
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


    useEffect(() => {
      getFlightById(id);
    }, [id]);


  if (error || !flight || !user) {
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
    <div className="flight-details-text-container">
      <h4 className="flight-details-title">{flight.source} - {flight.destination} </h4>
      <p className="flight-details-content">
      New York, often called <b>New York City</b> or NYC, is the most populous city in the United States, located at the southern tip of New York State on one of the world's largest natural harbors. The city comprises five boroughs, each coextensive with a respective county. The city is the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the United States by both population and urban area. New York is a global center of finance and commerce, culture, technology, entertainment and media, academics and scientific output, the arts and fashion, and, as home to the headquarters of the United Nations, international diplomacy.
      </p>

     <FlightDetailInfo id={flight.id} user={user} />
    </div>
  </div>


  )
}

export default FlightDetails;

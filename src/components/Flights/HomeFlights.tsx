import React, { useState, useEffect } from "react";
import { HomeFlight } from "../../models/Flight";
import { fetchAvailableHomeFlights } from "../../services/flightApiService";
import './HomeFlights.scss';
import FlightCell from "./FlightCell";
import EmptyTable from "../../utils/EmptyTable";


const HomeFlights: React.FC = () => {

  const [homeFlights, setHomeFlights] = useState<HomeFlight[]>([]); // Array of Flight objects
  const [error, setError] = useState<string | null>(null); // Error message or null

  const getFlights = async () => {
    console.log("Fetching Data");
    try {
        const userData = await fetchAvailableHomeFlights();
        setHomeFlights(userData); 
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
    <div className="home-flight-container">
      <h2 className="title-flights-available">Flights Available</h2>
      <hr className="hr"/>

      {error && <p style={{ color: "red" }}>{error}</p>} 
      <div className="flight-cell-container">
        {homeFlights.length > 0 ? (
          homeFlights.map((homeFlight, _) => ( 
            <FlightCell homeFlight={homeFlight} />
          ))
        ) : (
            <EmptyTable text={"No Flights Available"}/>
        )}
      </div>
    </div>
  );

}

export default HomeFlights;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHomeFlightById } from "../../services/flightApiService";
import AirPlaneDetail from '../../assets/AirPlaneDetail.jpg'
import { HomeFlight } from "../../models/Flight";
import './FlightDetails.scss';
import FlightDetailInfo from "./FlightDetailInfo";

const FlightDetails: React.FC = () => {

    const { id } = useParams<{ id: string }>(); // gettind id from URL
    const [homeFlight, setHomeFlight] = useState<HomeFlight>(); 
    const [error, setError] = useState<string | null>(null); 

    const getHomeFlightById = async (id?: string) => {
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
      getHomeFlightById(id);
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
    <div className="flight-details-text-container">
      <h4 className="flight-details-title">{homeFlight.source} - {homeFlight.destination} </h4>
      <p className="flight-details-content">
      New York, often called <b>New York City</b> or NYC, is the most populous city in the United States, located at the southern tip of New York State on one of the world's largest natural harbors. The city comprises five boroughs, each coextensive with a respective county. The city is the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the United States by both population and urban area. New York is a global center of finance and commerce, culture, technology, entertainment and media, academics and scientific output, the arts and fashion, and, as home to the headquarters of the United Nations, international diplomacy.
      With an estimated population in 2023 of 8,258,035 distributed over 300.46 square miles (778.2 km2), the city is the most densely populated major city in the United States. New York City has more than double the population of Los Angeles, the nation's second-most populous city. With more than 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York City is one of the world's most populous megacities. The city and its metropolitan area are the premier gateway for legal immigration to the United States. As many as 800 languages are spoken in New York City, making it the most linguistically diverse city in the world. In 2021, the city was home to nearly 3.1 million residents born outside the United States, the largest foreign-born population of any city in the world.
      New York City traces its origins to Fort Amsterdam and a trading post founded on Manhattan Island by Dutch colonists around 1624. The settlement was named New Amsterdam in 1626 and was chartered as a city in 1653. The city came under English control in 1664 and was temporarily renamed New York after King Charles II granted the lands to his brother, the Duke of York, before being permanently renamed New York in November 1674. Following independence from Great Britain, the city was the national capital of the United States from 1785 until 1790. The modern city was formed by the 1898 consolidation of its five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.
      Anchored by Wall Street in the Financial District, Manhattan, New York City has been called both the world's premier financial and fintech center and the most economically powerful city in the world. As of 2022, the New York metropolitan area is the largest metropolitan economy in the world, with a gross metropolitan product of over US$2.16 trillion. The New York metropolitan area's economy is larger than all but nine countries in the world. Despite having a 24/7 rapid transit system, New York also leads the world in urban automobile traffic congestion. The city is home to the world's two largest stock exchanges by market capitalization of their listed companies: the New York Stock Exchange and Nasdaq. New York City is an established safe haven for global investors. As of 2023, New York City is the most expensive city in the world for expatriates and has by a wide margin the highest residential rents of any city in the nation; and Fifth Avenue is the most expensive shopping street in the world. New York City is home by a significant margin to the highest number of billionaires, individuals of ultra-high net worth (greater than US$30 million), and millionaires of any city in the world.
      </p>

     <FlightDetailInfo id={homeFlight.id} />
    </div>
  </div>


  )
}

export default FlightDetails;

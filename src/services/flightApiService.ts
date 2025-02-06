import { BASE_URL, API_VERSION } from "../config/constants";
import { Flight } from "../models/Flight";
import { Payload } from "../models/Payload";
import { User } from "../models/User";
import { getResponse } from "../utils/helpers";

export const fetchFlightById = async(id: String): Promise<Flight> => {
  console.log(`Fetching Flight from ${BASE_URL}${API_VERSION}/flights/${id}`)
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/${id}`);
  return getResponse(response, `Error fetching flight with id ${id}`);
}

export const fetchAvailableFlights = async (): Promise<Flight[]> => {
  console.log(`Fetching all available flights`)
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/`);
  return getResponse(response, "Error fetching available flights");
};

export const fetchFlightsBySourceAndDestination = async (source: string, destination: string): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/by-route?source=${source}&destination=${destination}`);
  return getResponse(response, `Error fetching flights by source ${source} and destination ${destination}`);
 };

export const fetchFlightsByDate = async (flightDate: Date): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/by-date?flightDate=${flightDate}`);
  return getResponse(response, `Error fetching flights by date ${flightDate}`);
};

export const fetchFlightsWithCapacity = async (maxCapacity: number): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/by-date?maxCapacity=${maxCapacity}`);
  return getResponse(response, `Error fetching flights with max capacity ${maxCapacity}`);
};

export const addFlight = async (flight: Flight, user: User): Promise<any> => {
  const payload: Payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(flight),
  }
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/add?user=${user}`, payload);
  return getResponse(response, `Error adding flight ${flight}`);
};

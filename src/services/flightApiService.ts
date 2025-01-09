import { BASE_URL, API_VERSION } from "../config/constants";
import { Flight } from "../models/Flight";
import { Payload } from "../models/Payload";
import { getResponse } from "../utils/helpers";

export const fetchAvailableFlights = async (): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights`);
  getResponse(response, "Error fetching available flights");
};

export const fetchFlightsBySourceAndDestination = async (source: string, destination: string): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/by-route?source=${source}&destination=${destination}`);
  getResponse(response, `Error fetching flights by source ${source} and destination ${destination}`);
 };

export const fetchFlightsByDate = async (flightDate: Date): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/by-date?flightDate=${flightDate}`);
  getResponse(response, `Error fetching flights by date ${flightDate}`);
};

export const fetchFlightsWithCapacity = async (maxCapacity: number): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights/by-date?maxCapacity=${maxCapacity}`);
  getResponse(response, `Error fetching flights with max capacity ${maxCapacity}`);
};

export const addFlight = async (flight: Flight): Promise<any> => {
  const payload: Payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flight),
  }
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/flights`, payload);
  getResponse(response, `Error adding flight ${flight}`);
};

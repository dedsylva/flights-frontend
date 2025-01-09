import Decimal from "decimal.js";

export interface Flight {
  source: string,
  destination: string,
  flightTime: Date,
  passengers: number,
  totalCapacity: number,
  price: number,
  profit: Decimal
}
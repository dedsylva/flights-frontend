export interface Flight {
  id: string,
  source: string,
  destination: string,
  flightTime: Date,
  price: number,
  passengers: number,
  totalCapacity: number,
  profit: number
  passengersLeft: number
}

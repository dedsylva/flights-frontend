export interface HomeFlight {
  id: string,
  source: string,
  destination: string,
  flightTime: Date,
  price: number,
  passengersLeft: number
}

export interface Flight extends HomeFlight {
  passengers: number,
  totalCapacity: number,
  profit: number
}

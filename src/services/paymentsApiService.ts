import { BASE_URL, API_VERSION } from "../config/constants";
import { Flight } from "../models/Flight";
import { BalanceRequest } from "../models/BalanceRequest";
import { Payload } from "../models/Payload";
import { getResponse } from "../utils/helpers";

export const payFlight = async (flight: Flight): Promise<any> => {
  const payload: Payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(flight),
  }
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/payments/pay`, payload);
  getResponse(response,`Error paying flight ${flight}`);
};

export const addBalanceToUser = async (balanceRequest: BalanceRequest): Promise<any> => {
  const payload: Payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(balanceRequest),
  }
  const response: Response = await fetch(`${BASE_URL}${API_VERSION}/payments/add`, payload);
  getResponse(response, `Error adding Balance to User ${balanceRequest.name} `);
};

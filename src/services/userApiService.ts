import { BASE_URL, API_VERSION } from "../config/constants";
import { getResponse } from "../utils/helpers";

export const fetchUserData = async (userName: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}${API_VERSION}/users/${userName}`);
  getResponse(response, "Error fetching user data");
 };
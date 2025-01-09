import { Decimal } from "decimal.js";

export interface User {
  name: string,
  email: string,
  balance: Decimal
}
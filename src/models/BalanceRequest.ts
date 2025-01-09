import { User } from "./User";
import Decimal from "decimal.js";

export interface BalanceRequest extends User {
  amount: Decimal
}
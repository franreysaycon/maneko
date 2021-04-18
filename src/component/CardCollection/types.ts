export interface CardT {
  id: string;
  type: "atm" | "credit card";
  balance: number;
  name: string;
  issuer: "bpi_atm" | "bpi_cc" | "bdo_atm" | "ing_atm";
}

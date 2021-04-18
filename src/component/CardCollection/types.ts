export interface TransactionT {
  _id: string;
  name: string;
  value: number;
  type: string;
  createdAt: string;
}
export interface CardT {
  _id: string;
  type: string;
  balance: number;
  name: string;
  issuer: string;
  transactions: TransactionT[];
}

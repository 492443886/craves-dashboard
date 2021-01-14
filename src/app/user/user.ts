export interface User {
  userID: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  institution: string;
  joinedDate: string;
  creditCard: CreditCard;
  userName: string;
  userCategory: string;
  deliveredCount: number;
  moneySpent: number;
  moneyEarned: number;
  commissionRate: number;
  credit: number;
  warningCount: number;
  disableThreshold: number;
  isDisabled: boolean;
}

export interface CreditCard {
  cardType: string;
  cardNumber: string;
  expiryYear: string;
  expiryMonth: string;
  cardholderName: string;
  cvc: string;
}

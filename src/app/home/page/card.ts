import {Client} from './client';

export class Card {
  items: any[] = [];

  constructor() {
    this.total = 0;
    this.subTotal = 0;
    this.deliveryFee = 4.50;
    this.formOfPayment = 'Dinheiro';
  }

  total: number;
  subTotal: number;
  deliveryFee: number;
  formOfPayment: string;
  thing: string;
  client: Client;
}

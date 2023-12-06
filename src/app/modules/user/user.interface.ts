// import { Schema, model, connect } from 'mongoose';

export type FullName = {
  firstName: string;
  lastName: string;
};

export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Orders = {
  orderId: number;
  product: string;
  quantity: number;
  price: number;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  hobbies: string[];
  address: Address;
  orders: Orders[];
  isActive: 'active' | 'inActive';
};

// export interface User {
//   id: number;
//   email: string;
//   username: string;
//   password: string;
//   name: {
//     firstname: string;
//     lastname: string;
//   };
//   address: {
//     city: string;
//     street: string;
//     number: number;
//     zipcode: string;
//   };
//   phone: string;
// }

export interface User {
  id?: number;
  name: string;
  email: string;
  phone: string;
}
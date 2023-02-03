export type TUsers = {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  city: string;
  geo: { lat: string; lng: string };
  lat: string;
  lng: string;
  street: string;
  suite: string;
  zipcode: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  bs: string;
  catchPhrase: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

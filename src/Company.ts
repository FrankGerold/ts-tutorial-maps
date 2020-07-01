import faker from "faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };


  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  };

  markerContent(): string {
    return `<h1>Company: ${this.name}</h1>
    <h2>${this.catchPhrase}</h2>
    <h3>Location: ${this.location.lat}, ${this.location.lng}</h3>`
  };
};

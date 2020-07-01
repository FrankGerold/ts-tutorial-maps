import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  };

  markerContent(): string {
    return `<h1>My Name: ${this.name}</h1>
    <h3>Location: ${this.location.lat}, ${this.location.lng}</h3>`
  };
}

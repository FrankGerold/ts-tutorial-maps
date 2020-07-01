console.log('Ayy lmao');

import { User } from "./User";
import { Company } from "./Company";


const user = new User();
console.log(user);

const comp = new Company();
console.log(comp);

new google.maps.Map(document.getElementsByClassName('map')[0], {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

console.log('Ayy lmao');

import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const mapElementClass = 'map'

const user = new User();
console.log(user);

const comp = new Company();
console.log(comp);

const customMap = new Map(mapElementClass);
console.log(customMap);

customMap.addMarker(user);
customMap.addMarker(comp);

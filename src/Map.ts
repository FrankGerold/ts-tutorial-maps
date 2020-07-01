export class Map {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  });
}

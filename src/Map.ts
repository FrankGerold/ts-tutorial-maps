export class Map {
  private googleMap: google.maps.Map;

  constructor(mapDivClass: string) {
    this.googleMap = new google.maps.Map(document.getElementsByClassName(mapDivClass)[0], {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  });
}

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
};

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

  addMarker(mapItem: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapItem.location.lat,
        lng: mapItem.location.lng
    });
  };
}

// import { User } from './User';
// import { Company } from './Company';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export class CustomMap {
  private mapOptions: google.maps.MapOptions = {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  };

  private gmap: google.maps.Map;

  constructor(divID: string) {
    this.gmap = new google.maps.Map(
      document.getElementById(divID),
      this.mapOptions
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.gmap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({ content: mappable.markerContent() });

      infoWindow.open(this.gmap, marker);
    });
  }

  // addUser(user: User): void {
  //   new google.maps.Marker({
  //     map: this.gmap,
  //     position: { lat: user.location.lat, lng: user.location.lng },
  //   });
  // }

  // addCompany(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.gmap,
  //     position: { lat: company.location.lat, lng: company.location.lng },
  //   });
  // }
}

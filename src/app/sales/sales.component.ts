import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms'
import { locations, openHours } from '../location/locations_data';
import Location from '../location/location';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent {
  locations = locations;
  openHours = openHours;
  model = new Location('', '', openHours, 0, 0, 0);

  constructor() {
    this.randomNumberGenerator(locations);
  }

  randomNumberGenerator(locations) {
    for (let i = 0; i < locations.length; i++) {
      for (let j = 0; j < openHours.length; j++) {
        locations[i][openHours[j]] = (Math.floor(Math.random() * (locations[i].max - locations[i].min + 1)) + locations[i].min) * locations[i].averageCookiesPerCustomer;
      }
    }
  }

  sumOfHours(hour) {
    let sum = 0;
    //loop over the locations at that hour to calculate sum
    for (let i = 0; i < locations.length; i++) {
      sum += locations[i][hour];
    }
    return sum;
  }

  sumOfLocation(location) {
    let sum = 1;
    for (let i = 0; i < openHours.length; i++) {
      sum += location[openHours[i]];
    }
    return sum;
  }

  sumAll() {
    let sum = 0;
    locations.forEach(location => {
      sum += this.sumOfLocation(location);
    });
    return sum;
  }

  onSubmit() {
    console.log('hi there');
    locations.push(this.model);
    this.randomNumberGenerator([this.model]);
  }
}

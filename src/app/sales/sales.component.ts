import { Component } from '@angular/core';
import { locations, openHours } from '../location/location';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent {
  locations = locations;
  openHours = openHours;
  sumTotal = 0;

  helloWorld() {
    console.log('in hello world');
    for (let i = 0; i < locations.length; i++) {
      for (let j = 0; j < openHours.length; j++) {
        locations[i][openHours[j]] = (Math.floor(Math.random() * (locations[i].max - locations[i].min + 1)) + locations[i].min) * locations[i].averageCookiesPerCustomer;
      }
    }
    console.log(locations);
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
    this.sumTotal += sum;
    return sum;
  }

  sumOfAll() {
    return this.sumTotal;
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale!');
  }
}

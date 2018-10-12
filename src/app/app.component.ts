import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-GoogleMaps';
  lat = 20.97;
  lng = -89.62;

  onChoseLocation(event) {
    console.log(event);
  }
}

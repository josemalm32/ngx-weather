import {Component, Input} from '@angular/core';
import {LocationWeatherModel} from "../../core/models/weather-api/location-weather.model";

@Component({
  selector: 'ngx-weather-location[location]',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})



export class LocationComponent {
  @Input({alias: 'location', required: true}) data!: LocationWeatherModel;
}

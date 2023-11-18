import {Component} from '@angular/core';
import {TemperatureUnitsEnum, WidgetTypeEnum} from "ngx-weather";
import {NgxWeatherOptionModel} from "../../projects/ngx-weather/src/lib/core/models/ngx-weather-option.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-weather-workplace';
  protected readonly JSON = JSON;
  weatherOptions: NgxWeatherOptionModel[] = [
    {
    location: 'Tunisia',
    temperatureUnits: TemperatureUnitsEnum.FAHRENHEIT
    },
    {
      location: 'Tunisia',
      type: WidgetTypeEnum.DAY
    },
    {
    location: 'Tunisia',
    type: WidgetTypeEnum.WEEK
    }];
}

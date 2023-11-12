import {Component} from '@angular/core';
import {TemperatureUnitsEnum, WidgetConfigModel, WidgetTypeEnum} from "ngx-weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-weather-widget';
  weatherConfig1: WidgetConfigModel = {
    location: 'Tunisia',
    type: WidgetTypeEnum.DAY
  };
  weatherConfig2: WidgetConfigModel = {
    location: 'Tunisia',
    temperatureUnits: TemperatureUnitsEnum.FAHRENHEIT
  };
  weatherConfig3: WidgetConfigModel = {
    location: 'Tunisia',
    type: WidgetTypeEnum.WEEK
  };
}

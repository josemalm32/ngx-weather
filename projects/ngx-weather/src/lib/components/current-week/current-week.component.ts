import {Component, Input, OnInit} from '@angular/core';
import {ForecastDayWeatherModel} from "../../core/models/weather-api/forecast-day-weather.model";
import {TemperatureUnitsEnum} from "../../core/enum/temperature-units.enum";

@Component({
  selector: 'ngx-weather-current-week[data]',
  templateUrl: './current-week.component.html',
  styleUrls: ['./current-week.component.scss']
})

export class CurrentWeekComponent implements OnInit{

  @Input({required: true}) data!: ForecastDayWeatherModel[];
  @Input({required: true}) unit!: TemperatureUnitsEnum;
  ngOnInit(): void {
    console.log(this.data)
  }

}

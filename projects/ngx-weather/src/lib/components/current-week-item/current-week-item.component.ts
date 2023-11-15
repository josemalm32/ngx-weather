import {Component, Input, OnInit} from '@angular/core';
import {ForecastDayWeatherModel} from "../../core/models/weather-api/forecast-day-weather.model";
import {TemperatureUnitsEnum} from "../../core/enum/temperature-units.enum";

@Component({
  selector: 'ngx-weather-current-week-item[day]',
  templateUrl: './current-week-item.component.html',
  styleUrls: ['./current-week-item.component.scss']
})
export class CurrentWeekItemComponent implements OnInit{

  @Input({alias: "day", required: true}) data!: ForecastDayWeatherModel;
  @Input({required: true}) unit!: TemperatureUnitsEnum;
  protected max_temp!: number;
  protected min_temp!: number;
  ngOnInit(): void {
    if (this.unit === TemperatureUnitsEnum.CELSIUS){
      this.max_temp = this.data.day.maxtemp_c;
      this.min_temp = this.data.day.mintemp_c;
    } else{
      this.max_temp = this.data.day.maxtemp_f;
      this.min_temp = this.data.day.mintemp_f;
    }
  }

}

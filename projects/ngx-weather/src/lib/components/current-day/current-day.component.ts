import {Component, Input, OnInit} from '@angular/core';
import {CurrentWeatherModel} from "../../core/models/weather-api/current-weather.model";
import {TemperatureUnitsEnum} from "../../core/enum/temperature-units.enum";

@Component({
  selector: 'ngx-weather-current-day[data]',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.scss']
})
export class CurrentDayComponent implements OnInit{

  @Input({required: true}) data!: CurrentWeatherModel;
  @Input({required: true}) unit!: TemperatureUnitsEnum;

  protected temperature!: string;
  protected feelsLike!: string;

  ngOnInit(): void {
    if (this.unit === TemperatureUnitsEnum.CELSIUS){
      this.temperature = `${this.data.temp_c}${this.unit}`;
      this.feelsLike = `${this.data.feelslike_c}${this.unit}`;
    }else {
      this.temperature = `${this.data.temp_f}${this.unit}`;
      this.feelsLike = `${this.data.feelslike_f}${this.unit}`;
    }
  }
}

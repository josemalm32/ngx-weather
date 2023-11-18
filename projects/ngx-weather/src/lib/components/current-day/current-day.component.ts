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

  protected temperature!: number;
  protected feelsLike!: number;

  ngOnInit(): void {
    this.setTempUnit();
  }

  private setTempUnit(): void {
    this.temperature = this.unit === TemperatureUnitsEnum.CELSIUS ? this.data.temp_c : this.data.temp_f;
    this.feelsLike = this.unit === TemperatureUnitsEnum.CELSIUS ? this.data.feelslike_c : this.data.feelslike_f;
  }
}

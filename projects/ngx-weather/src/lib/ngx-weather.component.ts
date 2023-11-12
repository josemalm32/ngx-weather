import {Component, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {UtilsService} from "./core/services/utils/utils.service";
import {WidgetConfigModel} from "./core/models/widget-config.model";
import {WeatherApiService} from "./core/services/weather-api/weather-api.service";
import {ResponseWeatherModel} from "./core/models/weather-api/response-weather.model";
import {WidgetTypeEnum} from "./core/enum/widget-type.enum";
import {TemperatureUnitsEnum} from "./core/enum/temperature-units.enum";

@Component({
  selector: 'ngx-weather[config]',
  templateUrl: './ngx-weather.component.html',
  styleUrls: ['./ngx-weather.component.scss'],
})
export class NgxWeatherComponent implements OnInit{

  @Input({alias: 'config', required: true}) customConfig!: WidgetConfigModel;
  protected config!: WidgetConfigModel;
  protected weatherData!: ResponseWeatherModel;
  protected readonly WidgetTypeEnum = WidgetTypeEnum;
  protected isLoaded: WritableSignal<boolean> = signal<boolean>(false);
  protected unit!: TemperatureUnitsEnum;
  constructor(private readonly _weatherApiService: WeatherApiService) {
  }

  async ngOnInit(): Promise<void> {
    this.config = await UtilsService.setupDefaultConfig(this.customConfig);
    this.weatherData = await this.setWeatherData();
    this.unit = this.config.temperatureUnits || TemperatureUnitsEnum.CELSIUS;
    this.isLoaded.set(true);
  }

  private async setWeatherData(): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this._weatherApiService.getWeatherData(this.config).subscribe({
        next: (value) =>
          resolve(value)
      })
    })
  }
}

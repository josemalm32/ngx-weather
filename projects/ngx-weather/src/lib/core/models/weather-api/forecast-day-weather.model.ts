import {AstroWeatherModel} from "./astro-weather.model";
import {DayWeatherModel} from "./day-weather.model";

export interface ForecastDayWeatherModel {
    date: string,
    date_epoch: number,
    day: DayWeatherModel,
    astro: AstroWeatherModel
  }

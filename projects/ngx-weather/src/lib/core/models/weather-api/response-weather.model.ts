import {LocationWeatherModel} from "./location-weather.model";
import {CurrentWeatherModel} from "./current-weather.model";
import {ForecastDayWeatherModel} from "./forecast-day-weather.model";

export interface ResponseWeatherModel {
  location: LocationWeatherModel,
  current: CurrentWeatherModel,
  forecast?: {
    forecastday: ForecastDayWeatherModel[]
  }
}

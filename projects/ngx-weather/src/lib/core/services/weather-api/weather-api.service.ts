import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {NgxWeatherOptionModel} from "../../models/ngx-weather-option.model";
import {UtilsService} from "../utils/utils.service";
import {Observable} from "rxjs";
import {WidgetTypeEnum} from "../../enum/widget-type.enum";
import {ResponseWeatherModel} from "../../models/weather-api/response-weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  /**
   * Creates a new instance of the WeatherApiService class.
   * @param {HttpClient} http
   */
  constructor(private readonly http: HttpClient) {
  }

  public getWeatherData(config: NgxWeatherOptionModel): Observable<ResponseWeatherModel> {
    const reqObj = UtilsService.getRequestObject(config);
    const queryParam = UtilsService.objectToQueryParam(reqObj);
    const apiUrl = config.type === WidgetTypeEnum.DAY ? environment.weatherApi.current : environment.weatherApi.forecast;
    return this.http.get<ResponseWeatherModel>(`${apiUrl}?${queryParam}`);
  }

}

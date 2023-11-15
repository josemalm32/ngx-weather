import {Injectable} from '@angular/core';
import {WidgetConfigModel} from "../../models/widget-config.model";
import {defaultWidgetConfigStatics} from "../../statics/default-widget-config.statics";
import {RequestWeatherModel} from "../../models/weather-api/request-weather.model";
import {WidgetTypeEnum} from "../../enum/widget-type.enum";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public static async setupDefaultConfig(customConfig: WidgetConfigModel): Promise<WidgetConfigModel> {
    const config: WidgetConfigModel =  defaultWidgetConfigStatics as WidgetConfigModel;
    return { ...config, ...customConfig };
  }

  public static getRequestObject(obj: WidgetConfigModel): RequestWeatherModel{
    const req: RequestWeatherModel = {
      lang: obj.lang,
      q: typeof obj.location === 'object' ? `${obj.location.lat},${obj.location.long}` : obj.location
    }
    return obj.type === WidgetTypeEnum.DAY ? req : {...req, days: obj.days};
  }

  public static objectToQueryParam(obj: RequestWeatherModel | any): string {
    const queryParams: string[] = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
        queryParams.push(`${key}=${obj[key]}`);
      }
    }
    return queryParams.join('&');
  }
}

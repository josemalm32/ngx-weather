import {WidgetTypeEnum} from "../enum/widget-type.enum";
import {LanguagesEnum} from "../enum/languages.enum";
import {TemperatureUnitsEnum} from "../enum/temperature-units.enum";

export const defaultWidgetConfigStatics = {
  type: WidgetTypeEnum.FORECAST,
  temperatureUnits: TemperatureUnitsEnum.CELSIUS,
  lang: LanguagesEnum.English,
  days: 7
}


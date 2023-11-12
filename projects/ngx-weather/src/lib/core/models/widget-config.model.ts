import {WidgetTypeEnum} from "../enum/widget-type.enum";
import {LanguagesEnum} from "../enum/languages.enum";
import {PositionModel} from "./position.model";
import {TemperatureUnitsEnum} from "../enum/temperature-units.enum";
export type WidgetConfigModel = {
  type?: WidgetTypeEnum,
  temperatureUnits?: TemperatureUnitsEnum;
  lang?: LanguagesEnum,
  location: string | PositionModel;
  days?: number,
}

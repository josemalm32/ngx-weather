import {LanguagesEnum} from "../../enum/languages.enum";

export interface RequestWeatherModel {
  lang?: LanguagesEnum,
  q?: string,
  days?: number
}

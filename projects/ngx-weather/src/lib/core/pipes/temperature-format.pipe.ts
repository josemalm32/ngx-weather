import {Pipe, PipeTransform} from '@angular/core';
import {TemperatureUnitsEnum} from "../enum/temperature-units.enum";

@Pipe({
  name: 'temperatureFormat'
})
export class TemperatureFormatPipe implements PipeTransform {

  transform(value: number, unit: TemperatureUnitsEnum): string {
    return `${value+unit}`;
  }

}

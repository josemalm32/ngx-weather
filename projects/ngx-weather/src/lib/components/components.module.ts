import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentDayComponent } from './current-day/current-day.component';
import { CurrentWeekComponent } from './current-week/current-week.component';
import {CurrentWeekItemComponent} from "./current-week-item/current-week-item.component";
import {TemperatureFormatPipe} from "../core/pipes/temperature-format.pipe";



@NgModule({
  declarations: [
    CurrentDayComponent,
    CurrentWeekComponent,
    CurrentWeekItemComponent,
    TemperatureFormatPipe
  ],
  exports: [
    CurrentDayComponent,
    CurrentWeekComponent,
    CurrentWeekItemComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }

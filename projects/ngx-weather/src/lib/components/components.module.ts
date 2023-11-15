import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentDayComponent } from './current-day/current-day.component';
import { CurrentWeekComponent } from './current-week/current-week.component';
import { LocationComponent } from './location/location.component';
import {CurrentWeekItemComponent} from "./current-week-item/current-week-item.component";



@NgModule({
  declarations: [
    CurrentDayComponent,
    CurrentWeekComponent,
    CurrentWeekItemComponent,
    LocationComponent
  ],
  exports: [
    CurrentDayComponent,
    CurrentWeekComponent,
    CurrentWeekItemComponent,
    LocationComponent
  ],
    imports: [
        CommonModule,
    ]
})
export class ComponentsModule { }

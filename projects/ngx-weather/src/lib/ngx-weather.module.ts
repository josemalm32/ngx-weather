import {ModuleWithProviders, NgModule} from '@angular/core';
import { NgxWeatherComponent } from './ngx-weather.component';
import {ConfigService} from "./core/services/config/config.service";
import {ConfigModel} from "./core/models/config.model";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./core/services/http-interceptor/http-interceptor.service";
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "./components/components.module";
import {WeatherApiService} from "./core/services/weather-api/weather-api.service";

@NgModule({
  declarations: [
    NgxWeatherComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
  ],
  exports: [
    NgxWeatherComponent,
  ],
  providers: [ConfigService, WeatherApiService],
})
export class NgxWeatherModule {
  static forRoot(config: Partial<ConfigModel>): ModuleWithProviders<NgxWeatherModule> {
    return {
      ngModule: NgxWeatherModule,
      providers: [
        {
          provide: ConfigService,
          useValue: { ...new ConfigService(), config },
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true,
        },
      ],
    };
  }
}

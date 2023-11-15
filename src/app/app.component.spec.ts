import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WidgetConfigModel } from "../../projects/ngx-weather/src/lib/core/models/widget-config.model";
import { WidgetTypeEnum } from "../../projects/ngx-weather/src/lib/core/enum/widget-type.enum";
import {NgxWeatherModule} from "../../projects/ngx-weather/src/lib/ngx-weather.module";
import {environment} from "../environments/environment";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgxWeatherModule.forRoot({apiKey: environment.apiKey})]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default title', () => {
    expect(component.title).toEqual('ngx-weather-widget');
  });

  it('should have a default weather configuration', () => {
    const expectedConfig: WidgetConfigModel = {
      type: WidgetTypeEnum.DAY,
      location: 'Tunisia',
    };

    expect(component.weatherConfig).toEqual(expectedConfig);
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NgxWeatherModule} from "ngx-weather";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgxWeatherModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ngx-weather-workplace'`, () => {
    expect(component.title).toEqual('ngx-weather-workplace');
  });

  it('should render three ngx-weather components', () => {
    const compiled = fixture.nativeElement;
    const ngxWeatherComponents = compiled.querySelectorAll('ngx-weather');
    expect(ngxWeatherComponents.length).toBe(3);
  });
});

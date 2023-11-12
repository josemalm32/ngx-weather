import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWeatherComponent } from './ngx-weather.component';

describe('NgxWeatherComponent', () => {
  let component: NgxWeatherComponent;
  let fixture: ComponentFixture<NgxWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxWeatherComponent]
    });
    fixture = TestBed.createComponent(NgxWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

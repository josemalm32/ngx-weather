import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeekComponent } from './current-week.component';

describe('CurrentWeekComponent', () => {
  let component: CurrentWeekComponent;
  let fixture: ComponentFixture<CurrentWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeekComponent]
    });
    fixture = TestBed.createComponent(CurrentWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

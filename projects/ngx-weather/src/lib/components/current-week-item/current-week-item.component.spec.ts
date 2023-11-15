import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeekItemComponent } from './current-week-item.component';

describe('CurrentWeekItemComponent', () => {
  let component: CurrentWeekItemComponent;
  let fixture: ComponentFixture<CurrentWeekItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeekItemComponent]
    });
    fixture = TestBed.createComponent(CurrentWeekItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

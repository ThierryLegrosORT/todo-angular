import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonUnitsComponent } from './input-button-units.component';

describe('InputButtonUnitsComponent', () => {
  let component: InputButtonUnitsComponent;
  let fixture: ComponentFixture<InputButtonUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputButtonUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtonUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
